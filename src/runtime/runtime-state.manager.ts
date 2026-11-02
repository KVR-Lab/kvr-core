import { Injectable } from '@nestjs/common';

import { MemoryService } from '../memory/memory.service';
import { EventBus } from '../events/bus/event.bus';

import {
  RuntimeOperation,
  RuntimeSnapshot,
  RuntimeStatus,
  TerminalRuntimeStatuses,
} from './runtime-state';

const ALLOWED_TRANSITIONS: Record<RuntimeStatus, RuntimeStatus[]> = {
  WAITING: ['RUNNING', 'CANCELLED'],
  RUNNING: ['PAUSED', 'COMPLETED', 'FAILED', 'CANCELLED'],
  PAUSED: ['RUNNING', 'CANCELLED', 'COMPLETED', 'FAILED'],
  COMPLETED: [],
  FAILED: [],
  CANCELLED: [],
};

@Injectable()
export class RuntimeStateManager {
  private readonly operations = new Map<string, RuntimeOperation>();
  private loopStatus: RuntimeStatus = 'WAITING';
  private loopStartedAt: string | null = null;
  private currentId: string | null = null;
  private seq = 0;

  constructor(
    private readonly memory: MemoryService,
    private readonly events: EventBus,
  ) {}

  snapshot(): RuntimeSnapshot {
    return {
      service: 'runtime',
      status: this.loopStatus,
      running: this.loopStatus === 'RUNNING' || this.loopStatus === 'WAITING',
      paused: this.loopStatus === 'PAUSED',
      startedAt: this.loopStartedAt,
      current: this.current(),
      operations: this.list(),
    };
  }

  list(): RuntimeOperation[] {
    return [...this.operations.values()].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt),
    );
  }

  get(id: string): RuntimeOperation | undefined {
    return this.operations.get(id);
  }

  current(): RuntimeOperation | null {
    if (!this.currentId) {
      return null;
    }

    return this.operations.get(this.currentId) ?? null;
  }

  isPaused(): boolean {
    return this.loopStatus === 'PAUSED';
  }

  isLoopActive(): boolean {
    return this.loopStatus === 'WAITING' || this.loopStatus === 'RUNNING';
  }

  markLoopStarted(): RuntimeSnapshot {
    if (!this.loopStartedAt) {
      this.loopStartedAt = new Date().toISOString();
    }

    if (this.loopStatus !== 'PAUSED') {
      this.loopStatus = this.currentId ? 'RUNNING' : 'WAITING';
    }

    this.emit('runtime.started', this.snapshot());
    return this.snapshot();
  }

  pauseRuntime(): RuntimeSnapshot {
    if (this.loopStatus === 'PAUSED') {
      return this.snapshot();
    }

    this.loopStatus = 'PAUSED';

    if (this.currentId) {
      const current = this.get(this.currentId);
      if (current?.status === 'RUNNING') {
        this.transition(this.currentId, 'PAUSED');
      }
    }

    this.emit('runtime.paused', this.snapshot());
    return this.snapshot();
  }

  resumeRuntime(): RuntimeSnapshot {
    if (this.loopStatus !== 'PAUSED') {
      return this.snapshot();
    }

    if (this.currentId) {
      const current = this.get(this.currentId);
      if (current?.status === 'PAUSED') {
        this.transition(this.currentId, 'RUNNING');
      }
      this.loopStatus = 'RUNNING';
    } else {
      this.loopStatus = 'WAITING';
    }

    this.emit('runtime.resumed', this.snapshot());
    return this.snapshot();
  }

  create(input: {
    source?: string;
    planId?: string;
    id?: string;
  } = {}): RuntimeOperation {
    const now = new Date().toISOString();
    this.seq += 1;

    const operation: RuntimeOperation = {
      id: input.id ?? `runtime-op-${Date.now()}-${this.seq}`,
      source: input.source ?? 'runtime',
      status: 'WAITING',
      startedAt: null,
      finishedAt: null,
      duration: null,
      error: null,
      result: null,
      planId: input.planId,
      createdAt: now,
      updatedAt: now,
    };

    this.operations.set(operation.id, operation);
    this.emit('runtime.operation.created', operation);
    return { ...operation };
  }

  start(id: string): RuntimeOperation {
    const operation = this.transition(id, 'RUNNING', (next) => {
      next.startedAt = next.startedAt ?? new Date().toISOString();
      next.error = null;
      next.finishedAt = null;
      next.duration = null;
    });

    this.currentId = id;
    this.loopStatus = this.isPaused() ? 'PAUSED' : 'RUNNING';
    this.emit('runtime.operation.started', operation);
    return operation;
  }

  pause(id: string): RuntimeOperation {
    return this.transition(id, 'PAUSED');
  }

  resume(id: string): RuntimeOperation {
    return this.transition(id, 'RUNNING');
  }

  complete(id: string, result?: unknown): RuntimeOperation {
    const operation = this.finish(id, 'COMPLETED', { result });
    this.emit('runtime.operation.completed', operation);
    return operation;
  }

  fail(id: string, error: unknown): RuntimeOperation {
    const operation = this.finish(id, 'FAILED', {
      error: this.toErrorMessage(error),
    });
    this.emit('runtime.operation.failed', operation);
    return operation;
  }

  cancel(id: string): RuntimeOperation {
    const operation = this.finish(id, 'CANCELLED');
    this.emit('runtime.operation.cancelled', operation);
    return operation;
  }

  cancelCurrent(): RuntimeOperation | null {
    if (!this.currentId) {
      return null;
    }

    return this.cancel(this.currentId);
  }

  private finish(
    id: string,
    status: 'COMPLETED' | 'FAILED' | 'CANCELLED',
    patch: Partial<Pick<RuntimeOperation, 'result' | 'error'>> = {},
  ): RuntimeOperation {
    const operation = this.transition(id, status, (next) => {
      const finishedAt = new Date();
      next.finishedAt = finishedAt.toISOString();
      next.startedAt = next.startedAt ?? next.createdAt;
      next.duration = finishedAt.getTime() - Date.parse(next.startedAt);
      next.result = patch.result !== undefined ? patch.result : next.result;
      next.error = patch.error !== undefined ? patch.error : next.error;
    });

    if (this.currentId === id) {
      this.currentId = null;
      if (this.loopStatus === 'RUNNING') {
        this.loopStatus = 'WAITING';
      }
    }

    this.persist(operation);
    return operation;
  }

  private transition(
    id: string,
    status: RuntimeStatus,
    mutate?: (operation: RuntimeOperation) => void,
  ): RuntimeOperation {
    const current = this.operations.get(id);

    if (!current) {
      throw new Error(`Unknown runtime operation: ${id}`);
    }

    if (current.status === status) {
      return { ...current };
    }

    if (!ALLOWED_TRANSITIONS[current.status].includes(status)) {
      throw new Error(
        `Invalid runtime transition ${current.status} → ${status} for ${id}`,
      );
    }

    mutate?.(current);
    current.status = status;
    current.updatedAt = new Date().toISOString();
    this.operations.set(id, current);
    return { ...current };
  }

  private persist(operation: RuntimeOperation): void {
    try {
      this.memory.store({
        kind: 'runtime.operation',
        ...operation,
      });
    } catch {
      // Persistence must not break execution.
    }
  }

  private emit(name: string, payload: unknown): void {
    this.events.emit({
      name,
      payload,
      createdAt: new Date(),
    });
  }

  private toErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    return String(error);
  }

  isTerminal(status: RuntimeStatus): boolean {
    return TerminalRuntimeStatuses.includes(status);
  }
}

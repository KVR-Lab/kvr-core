"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeStateManager = void 0;
const common_1 = require("@nestjs/common");
const memory_service_1 = require("../memory/memory.service");
const event_bus_1 = require("../events/bus/event.bus");
const runtime_state_1 = require("./runtime-state");
const ALLOWED_TRANSITIONS = {
    WAITING: ['RUNNING', 'CANCELLED'],
    RUNNING: ['PAUSED', 'COMPLETED', 'FAILED', 'CANCELLED'],
    PAUSED: ['RUNNING', 'CANCELLED', 'COMPLETED', 'FAILED'],
    COMPLETED: [],
    FAILED: [],
    CANCELLED: [],
};
let RuntimeStateManager = class RuntimeStateManager {
    memory;
    events;
    operations = new Map();
    loopStatus = 'WAITING';
    loopStartedAt = null;
    currentId = null;
    seq = 0;
    constructor(memory, events) {
        this.memory = memory;
        this.events = events;
    }
    snapshot() {
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
    list() {
        return [...this.operations.values()].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
    get(id) {
        return this.operations.get(id);
    }
    current() {
        if (!this.currentId) {
            return null;
        }
        return this.operations.get(this.currentId) ?? null;
    }
    isPaused() {
        return this.loopStatus === 'PAUSED';
    }
    isLoopActive() {
        return this.loopStatus === 'WAITING' || this.loopStatus === 'RUNNING';
    }
    markLoopStarted() {
        if (!this.loopStartedAt) {
            this.loopStartedAt = new Date().toISOString();
        }
        if (this.loopStatus !== 'PAUSED') {
            this.loopStatus = this.currentId ? 'RUNNING' : 'WAITING';
        }
        this.emit('runtime.started', this.snapshot());
        return this.snapshot();
    }
    pauseRuntime() {
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
    resumeRuntime() {
        if (this.loopStatus !== 'PAUSED') {
            return this.snapshot();
        }
        if (this.currentId) {
            const current = this.get(this.currentId);
            if (current?.status === 'PAUSED') {
                this.transition(this.currentId, 'RUNNING');
            }
            this.loopStatus = 'RUNNING';
        }
        else {
            this.loopStatus = 'WAITING';
        }
        this.emit('runtime.resumed', this.snapshot());
        return this.snapshot();
    }
    create(input = {}) {
        const now = new Date().toISOString();
        this.seq += 1;
        const operation = {
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
    start(id) {
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
    pause(id) {
        return this.transition(id, 'PAUSED');
    }
    resume(id) {
        return this.transition(id, 'RUNNING');
    }
    complete(id, result) {
        const operation = this.finish(id, 'COMPLETED', { result });
        this.emit('runtime.operation.completed', operation);
        return operation;
    }
    fail(id, error) {
        const operation = this.finish(id, 'FAILED', {
            error: this.toErrorMessage(error),
        });
        this.emit('runtime.operation.failed', operation);
        return operation;
    }
    cancel(id) {
        const operation = this.finish(id, 'CANCELLED');
        this.emit('runtime.operation.cancelled', operation);
        return operation;
    }
    cancelCurrent() {
        if (!this.currentId) {
            return null;
        }
        return this.cancel(this.currentId);
    }
    finish(id, status, patch = {}) {
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
    transition(id, status, mutate) {
        const current = this.operations.get(id);
        if (!current) {
            throw new Error(`Unknown runtime operation: ${id}`);
        }
        if (current.status === status) {
            return { ...current };
        }
        if (!ALLOWED_TRANSITIONS[current.status].includes(status)) {
            throw new Error(`Invalid runtime transition ${current.status} → ${status} for ${id}`);
        }
        mutate?.(current);
        current.status = status;
        current.updatedAt = new Date().toISOString();
        this.operations.set(id, current);
        return { ...current };
    }
    persist(operation) {
        try {
            this.memory.store({
                kind: 'runtime.operation',
                ...operation,
            });
        }
        catch {
        }
    }
    emit(name, payload) {
        this.events.emit({
            name,
            payload,
            createdAt: new Date(),
        });
    }
    toErrorMessage(error) {
        if (error instanceof Error) {
            return error.message;
        }
        return String(error);
    }
    isTerminal(status) {
        return runtime_state_1.TerminalRuntimeStatuses.includes(status);
    }
};
exports.RuntimeStateManager = RuntimeStateManager;
exports.RuntimeStateManager = RuntimeStateManager = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memory_service_1.MemoryService,
        event_bus_1.EventBus])
], RuntimeStateManager);
//# sourceMappingURL=runtime-state.manager.js.map
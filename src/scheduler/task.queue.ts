import { Injectable } from '@nestjs/common';

import { EnqueueJobInput, ScheduledJob } from './scheduled-job';

@Injectable()
export class TaskQueue {
  private tasks: any[] = [];
  private jobs: ScheduledJob[] = [];
  private seq = 0;
  private running = 0;
  private readonly runningKeys = new Set<string>();
  private maxConcurrent = 1;

  setMaxConcurrent(value: number) {
    this.maxConcurrent = Math.max(1, value);
  }

  push(task: any) {
    this.tasks.push(task);
  }

  next() {
    return this.tasks.shift();
  }

  all() {
    return [...this.tasks];
  }

  enqueue(input: EnqueueJobInput = {}): ScheduledJob {
    const now = Date.now();
    this.seq += 1;

    const job: ScheduledJob = {
      id: input.id ?? `sched-${now}-${this.seq}`,
      command: input.command,
      plan: input.plan,
      priority: input.priority ?? 0,
      runAt: input.runAt ?? now + (input.delayMs ?? 0),
      attempts: 0,
      maxAttempts: input.maxAttempts ?? 1,
      retryDelayMs: input.retryDelayMs ?? 1000,
      dependsOn: input.dependsOn ?? [],
      concurrencyKey: input.concurrencyKey,
      status: 'queued',
      error: null,
      createdAt: new Date(now).toISOString(),
      updatedAt: new Date(now).toISOString(),
    };

    this.jobs.push(job);
    return { ...job };
  }

  get(id: string): ScheduledJob | undefined {
    return this.jobs.find((job) => job.id === id);
  }

  list(): ScheduledJob[] {
    return this.jobs.map((job) => ({ ...job }));
  }

  cancel(id: string): ScheduledJob | null {
    const job = this.jobs.find((item) => item.id === id);

    if (!job || job.status === 'done') {
      return job ? { ...job } : null;
    }

    job.status = 'cancelled';
    job.updatedAt = new Date().toISOString();
    this.release(job);
    return { ...job };
  }

  dequeueReady(now = Date.now()): ScheduledJob | null {
    if (this.running >= this.maxConcurrent) {
      return null;
    }

    const ready = this.jobs
      .filter((job) => this.isReady(job, now))
      .sort((a, b) => b.priority - a.priority || a.runAt - b.runAt);

    const job = ready[0];

    if (!job) {
      return null;
    }

    job.status = 'running';
    job.attempts += 1;
    job.updatedAt = new Date().toISOString();
    this.running += 1;

    if (job.concurrencyKey) {
      this.runningKeys.add(job.concurrencyKey);
    }

    return { ...job };
  }

  markDone(id: string): ScheduledJob | null {
    const job = this.jobs.find((item) => item.id === id);

    if (!job) {
      return null;
    }

    job.status = 'done';
    job.error = null;
    job.updatedAt = new Date().toISOString();
    this.release(job);
    return { ...job };
  }

  markFailed(id: string, error?: unknown): ScheduledJob | null {
    const job = this.jobs.find((item) => item.id === id);

    if (!job) {
      return null;
    }

    this.release(job);
    job.error = error instanceof Error ? error.message : String(error ?? 'failed');
    job.updatedAt = new Date().toISOString();

    if (job.attempts < job.maxAttempts && job.status !== 'cancelled') {
      job.status = 'queued';
      job.runAt = Date.now() + job.retryDelayMs;
      return { ...job };
    }

    job.status = 'failed';
    return { ...job };
  }

  private isReady(job: ScheduledJob, now: number): boolean {
    if (job.status !== 'queued' || job.runAt > now) {
      return false;
    }

    if (job.concurrencyKey && this.runningKeys.has(job.concurrencyKey)) {
      return false;
    }

    return job.dependsOn.every((id) => this.get(id)?.status === 'done');
  }

  private release(job: ScheduledJob) {
    if (this.running > 0) {
      this.running -= 1;
    }

    if (job.concurrencyKey) {
      this.runningKeys.delete(job.concurrencyKey);
    }
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueue = void 0;
const common_1 = require("@nestjs/common");
let TaskQueue = class TaskQueue {
    tasks = [];
    jobs = [];
    seq = 0;
    running = 0;
    runningKeys = new Set();
    maxConcurrent = 1;
    setMaxConcurrent(value) {
        this.maxConcurrent = Math.max(1, value);
    }
    push(task) {
        this.tasks.push(task);
    }
    next() {
        return this.tasks.shift();
    }
    all() {
        return [...this.tasks];
    }
    enqueue(input = {}) {
        const now = Date.now();
        this.seq += 1;
        const job = {
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
    get(id) {
        return this.jobs.find((job) => job.id === id);
    }
    list() {
        return this.jobs.map((job) => ({ ...job }));
    }
    cancel(id) {
        const job = this.jobs.find((item) => item.id === id);
        if (!job || job.status === 'done') {
            return job ? { ...job } : null;
        }
        job.status = 'cancelled';
        job.updatedAt = new Date().toISOString();
        this.release(job);
        return { ...job };
    }
    dequeueReady(now = Date.now()) {
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
    markDone(id) {
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
    markFailed(id, error) {
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
    isReady(job, now) {
        if (job.status !== 'queued' || job.runAt > now) {
            return false;
        }
        if (job.concurrencyKey && this.runningKeys.has(job.concurrencyKey)) {
            return false;
        }
        return job.dependsOn.every((id) => this.get(id)?.status === 'done');
    }
    release(job) {
        if (this.running > 0) {
            this.running -= 1;
        }
        if (job.concurrencyKey) {
            this.runningKeys.delete(job.concurrencyKey);
        }
    }
};
exports.TaskQueue = TaskQueue;
exports.TaskQueue = TaskQueue = __decorate([
    (0, common_1.Injectable)()
], TaskQueue);
//# sourceMappingURL=task.queue.js.map
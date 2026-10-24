import { EnqueueJobInput, ScheduledJob } from './scheduled-job';
export declare class TaskQueue {
    private tasks;
    private jobs;
    private seq;
    private running;
    private readonly runningKeys;
    private maxConcurrent;
    setMaxConcurrent(value: number): void;
    push(task: any): void;
    next(): any;
    all(): any[];
    enqueue(input?: EnqueueJobInput): ScheduledJob;
    get(id: string): ScheduledJob | undefined;
    list(): ScheduledJob[];
    cancel(id: string): ScheduledJob | null;
    dequeueReady(now?: number): ScheduledJob | null;
    markDone(id: string): ScheduledJob | null;
    markFailed(id: string, error?: unknown): ScheduledJob | null;
    private isReady;
    private release;
}

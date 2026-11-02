import { EnqueueJobInput } from "./scheduled-job";
import { TaskQueue } from "./task.queue";
export declare class SchedulerService {
    private readonly queue;
    constructor(queue: TaskQueue);
    every(ms: number, task: () => Promise<void> | void): NodeJS.Timeout;
    schedule(task: any): import("./scheduled-job").ScheduledJob | NodeJS.Timeout | null;
    enqueue(input?: EnqueueJobInput): import("./scheduled-job").ScheduledJob;
    dequeueReady(now?: number): import("./scheduled-job").ScheduledJob | null;
    markDone(id: string): import("./scheduled-job").ScheduledJob | null;
    markFailed(id: string, error?: unknown): import("./scheduled-job").ScheduledJob | null;
    cancel(id: string): import("./scheduled-job").ScheduledJob | null;
    list(): import("./scheduled-job").ScheduledJob[];
    get(id: string): import("./scheduled-job").ScheduledJob | null;
    setMaxConcurrent(value: number): void;
}

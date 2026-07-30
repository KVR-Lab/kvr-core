export declare class SchedulerService {
    every(ms: number, task: () => Promise<void> | void): NodeJS.Timeout;
    schedule(task: any): NodeJS.Timeout | null;
}

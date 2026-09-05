import type { EnqueueJobInput } from './scheduled-job';
import { SchedulerService } from './scheduler.service';
export declare class SchedulerController {
    private readonly scheduler;
    constructor(scheduler: SchedulerService);
    list(): {
        jobs: import("./scheduled-job").ScheduledJob[];
    };
    get(id: string): import("./scheduled-job").ScheduledJob;
    enqueue(body: EnqueueJobInput): import("./scheduled-job").ScheduledJob;
    cancel(id: string): import("./scheduled-job").ScheduledJob;
}

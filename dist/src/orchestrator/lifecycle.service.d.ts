import { HealthService } from '../system/health.service';
import { SchedulerService } from '../scheduler/scheduler.service';
export declare class LifecycleService {
    private readonly health;
    private readonly scheduler;
    constructor(health: HealthService, scheduler: SchedulerService);
    boot(): {
        status: string;
        health: {
            status: string;
            service: string;
            time: Date;
        };
        scheduler: string;
        time: Date;
    };
    startTask(task: any): NodeJS.Timeout | null;
}

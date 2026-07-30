import { MonitorService } from './monitor.service';
export declare class MonitorController {
    private readonly monitor;
    constructor(monitor: MonitorService);
    status(): {
        system: string;
        runtime: string;
        agent: string;
        memory: string;
        storage: string;
        time: Date;
    };
}

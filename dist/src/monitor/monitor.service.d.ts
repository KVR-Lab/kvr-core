import { MetricsService } from './metrics.service';
export declare class MonitorService {
    private readonly metrics;
    constructor(metrics: MetricsService);
    status(): {
        system: string;
        runtime: string;
        agent: string;
        memory: string;
        storage: string;
        time: Date;
    };
}

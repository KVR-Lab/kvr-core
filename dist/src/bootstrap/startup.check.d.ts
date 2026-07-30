import { HealthService } from '../system/health.service';
import { DiagnosticsService } from '../system/diagnostics.service';
export declare class StartupCheck {
    private readonly health;
    private readonly diagnostics;
    constructor(health: HealthService, diagnostics: DiagnosticsService);
    verify(): {
        health: {
            status: string;
            service: string;
            time: Date;
        };
        diagnostics: {
            runtime: boolean;
            agent: boolean;
            memory: boolean;
            knowledge: boolean;
            ai: boolean;
            planner: boolean;
            executor: boolean;
        };
        ready: boolean;
    };
}

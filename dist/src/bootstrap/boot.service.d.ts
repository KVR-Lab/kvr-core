import { StartupCheck } from './startup.check';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
export declare class BootService {
    private readonly check;
    private readonly orchestrator;
    constructor(check: StartupCheck, orchestrator: OrchestratorService);
    start(): {
        system: {
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
        orchestrator: Promise<{
            status: string;
            agents: number;
        }>;
        status: string;
    };
}

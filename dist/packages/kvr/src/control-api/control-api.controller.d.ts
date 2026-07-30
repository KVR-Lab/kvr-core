import { RuntimeOrchestratorService } from '../runtime-orchestrator';
export declare class ControlApiController {
    private runtime;
    constructor(runtime: RuntimeOrchestratorService);
    status(): {
        runtime: string;
        systems: {
            name: string;
            status: string;
        }[];
    };
    start(): {
        message: string;
        systems: {
            total: number;
            systems: {
                name: string;
                status: string;
            }[];
        };
    };
    execute(body: any): {
        task: string;
        status: string;
        engine: string;
    };
}

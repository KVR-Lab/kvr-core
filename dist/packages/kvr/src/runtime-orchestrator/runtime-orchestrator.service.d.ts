import { SystemRegistryService } from '../system-registry';
export declare class RuntimeOrchestratorService {
    private registry;
    constructor(registry: SystemRegistryService);
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
    execute(task: string): {
        task: string;
        status: string;
        engine: string;
    };
}

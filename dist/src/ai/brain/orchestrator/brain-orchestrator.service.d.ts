import { MemoryService } from '../memory/memory.service';
import { HybridBrainService } from '../hybrid/hybrid-brain.service';
import { SystemBrainService } from '../system-brain.service';
export declare class BrainOrchestratorService {
    private readonly memory;
    private readonly hybrid;
    private readonly system;
    constructor(memory: MemoryService, hybrid: HybridBrainService, system: SystemBrainService);
    handleMessage(message: string): Promise<{
        success: boolean;
        brain: string;
        response: {
            hybrid: import("../hybrid/hybrid-brain.service").BrainOutput;
            system: {
                ok: boolean;
                input: string;
                blueprint: {
                    type: string;
                    modules: string[];
                    database: string[];
                    api: string[];
                    roadmap: string[];
                };
                generated: boolean;
                timestamp: string;
            };
        };
    }>;
}

import { HybridBrainService } from "./brain/hybrid/hybrid-brain.service";
import { BrainOrchestratorService } from "./brain/orchestrator/brain-orchestrator.service";
import { IntentEngineService } from "./brain/v2/intent-engine.service";
import { SystemBrainService } from "./brain/system-brain.service";
import { LlmGateway } from "../llm/llm.gateway";
export declare class AiService {
    private readonly hybrid;
    private readonly orchestrator;
    private readonly intent;
    private readonly system;
    private readonly llm;
    constructor(hybrid: HybridBrainService, orchestrator: BrainOrchestratorService, intent: IntentEngineService, system: SystemBrainService, llm: LlmGateway);
    process(message: string): Promise<{
        ok: boolean;
        engine: string;
        input: string;
        intent: import("./brain/v2/intent-engine.service").IntentResult;
        orchestrator: {
            success: boolean;
            brain: string;
            response: {
                hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
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
        };
        blueprint: {
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
        hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
        llm: any;
    }>;
    ask(prompt: string): Promise<{
        ok: boolean;
        engine: string;
        input: string;
        intent: import("./brain/v2/intent-engine.service").IntentResult;
        orchestrator: {
            success: boolean;
            brain: string;
            response: {
                hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
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
        };
        blueprint: {
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
        hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
        llm: any;
    }>;
    execute(command: string): Promise<{
        ok: boolean;
        engine: string;
        input: string;
        intent: import("./brain/v2/intent-engine.service").IntentResult;
        orchestrator: {
            success: boolean;
            brain: string;
            response: {
                hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
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
        };
        blueprint: {
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
        hybrid: import("./brain/hybrid/hybrid-brain.service").BrainOutput;
        llm: any;
    }>;
}

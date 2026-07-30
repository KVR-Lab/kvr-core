import { AiService } from "../ai/ai.service";
export declare class ReasoningEngine {
    private readonly ai;
    constructor(ai: AiService);
    reason(task: any): Promise<{
        goal: any;
        priority: string;
        analysis: {
            ok: boolean;
            engine: string;
            input: string;
            intent: import("../ai/brain/v2/intent-engine.service").IntentResult;
            orchestrator: {
                success: boolean;
                brain: string;
                response: {
                    hybrid: import("../ai/brain/hybrid/hybrid-brain.service").BrainOutput;
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
            hybrid: import("../ai/brain/hybrid/hybrid-brain.service").BrainOutput;
            llm: any;
        };
        steps: string[];
        createdAt: string;
    }>;
}

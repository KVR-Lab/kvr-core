import { AiService } from './ai.service';
export declare class AiController {
    private readonly ai;
    constructor(ai: AiService);
    ask(body: {
        prompt: string;
    }): Promise<{
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
    execute(body: {
        command: string;
    }): Promise<{
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

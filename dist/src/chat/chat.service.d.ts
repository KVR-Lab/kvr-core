import { ChatStore } from './chat.store';
import { EventBus } from '../events/bus/event.bus';
import { CommandParser } from '../command/command.parser';
import { AgentService } from '../agent/agent.service';
export declare class ChatService {
    private readonly store;
    private readonly eventBus;
    private readonly parser;
    private readonly agent;
    constructor(store: ChatStore, eventBus: EventBus, parser: CommandParser, agent: AgentService);
    send(message: string, sessionId?: string): Promise<{
        ok: boolean;
        role: string;
        sessionId: string;
        response: {
            status: string;
            reasoning: {
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
            };
            aiDecision: {
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
            executionPlan: {
                id: string;
                command: any;
                status: string;
                currentStep: number;
                steps: {
                    id: string;
                    action: string;
                    status: string;
                }[];
                createdAt: Date;
            };
            executionResults: any[];
            toolResult: any;
            commandResult: any;
            shellResult: any;
        };
        history: string[];
        timestamp: string;
    }>;
}

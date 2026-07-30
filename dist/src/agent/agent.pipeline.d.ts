import { ReasoningEngine } from '../reasoning/reasoning.engine';
import { PlannerService } from '../planner/planner.service';
import { ToolRouter } from '../tools/tool.router';
import { AgentMemoryService } from './agent.memory.service';
import { AgentLoop } from './agent.loop';
import { CommandService } from '../command/command.service';
import { AiService } from '../ai/ai.service';
export declare class AgentPipeline {
    private readonly reasoning;
    private readonly planner;
    private readonly tools;
    private readonly memory;
    private readonly loop;
    private readonly commands;
    private readonly ai;
    constructor(reasoning: ReasoningEngine, planner: PlannerService, tools: ToolRouter, memory: AgentMemoryService, loop: AgentLoop, commands: CommandService, ai: AiService);
    execute(task: any): Promise<{
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
    }>;
}

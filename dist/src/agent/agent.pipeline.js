"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentPipeline = void 0;
const common_1 = require("@nestjs/common");
const reasoning_engine_1 = require("../reasoning/reasoning.engine");
const planner_service_1 = require("../planner/planner.service");
const tool_router_1 = require("../tools/tool.router");
const agent_memory_service_1 = require("./agent.memory.service");
const agent_loop_1 = require("./agent.loop");
const command_service_1 = require("../command/command.service");
const ai_service_1 = require("../ai/ai.service");
let AgentPipeline = class AgentPipeline {
    reasoning;
    planner;
    tools;
    memory;
    loop;
    commands;
    ai;
    constructor(reasoning, planner, tools, memory, loop, commands, ai) {
        this.reasoning = reasoning;
        this.planner = planner;
        this.tools = tools;
        this.memory = memory;
        this.loop = loop;
        this.commands = commands;
        this.ai = ai;
    }
    async execute(task) {
        const reasoning = await this.reasoning.reason(task);
        const prompt = typeof task === 'string'
            ? task
            : task?.message ??
                task?.command ??
                JSON.stringify(task);
        const aiDecision = await this.ai.process(prompt);
        const executionPlan = this.planner.plan(aiDecision);
        const executionResults = await this.loop.run(executionPlan);
        let toolResult = null;
        if (task?.tool) {
            toolResult = await this.tools.execute(task.tool, ...(task.args ?? []));
        }
        let commandResult = null;
        if (task?.build) {
            commandResult = this.commands.build();
        }
        else if (task?.command === 'dev') {
            commandResult = this.commands.dev();
        }
        else if (task?.command === 'install') {
            commandResult = this.commands.install();
        }
        else if (task?.command === 'status') {
            commandResult = this.commands.gitStatus();
        }
        let shellResult = null;
        if (task?.shell) {
            shellResult = this.commands.powershell(task.shell);
        }
        const result = {
            status: 'completed',
            reasoning,
            aiDecision,
            executionPlan,
            executionResults,
            toolResult,
            commandResult,
            shellResult,
        };
        await this.memory.remember(task, result);
        return result;
    }
};
exports.AgentPipeline = AgentPipeline;
exports.AgentPipeline = AgentPipeline = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reasoning_engine_1.ReasoningEngine,
        planner_service_1.PlannerService,
        tool_router_1.ToolRouter,
        agent_memory_service_1.AgentMemoryService,
        agent_loop_1.AgentLoop,
        command_service_1.CommandService,
        ai_service_1.AiService])
], AgentPipeline);
//# sourceMappingURL=agent.pipeline.js.map
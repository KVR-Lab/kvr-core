"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModule = void 0;
const common_1 = require("@nestjs/common");
const memory_module_1 = require("../memory/memory.module");
const reasoning_module_1 = require("../reasoning/reasoning.module");
const planner_module_1 = require("../planner/planner.module");
const tool_module_1 = require("../tools/tool.module");
const executor_module_1 = require("../executor/executor.module");
const command_module_1 = require("../command/command.module");
const ai_module_1 = require("../ai/ai.module");
const agent_controller_1 = require("./agent.controller");
const agent_service_1 = require("./agent.service");
const agent_pipeline_1 = require("./agent.pipeline");
const agent_memory_service_1 = require("./agent.memory.service");
const agent_loop_1 = require("./agent.loop");
let AgentModule = class AgentModule {
};
exports.AgentModule = AgentModule;
exports.AgentModule = AgentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            memory_module_1.MemoryModule,
            reasoning_module_1.ReasoningModule,
            planner_module_1.PlannerModule,
            tool_module_1.ToolModule,
            executor_module_1.ExecutorModule,
            command_module_1.CommandModule,
            ai_module_1.AiModule,
        ],
        controllers: [
            agent_controller_1.AgentController,
        ],
        providers: [
            agent_service_1.AgentService,
            agent_memory_service_1.AgentMemoryService,
            agent_pipeline_1.AgentPipeline,
            agent_loop_1.AgentLoop,
        ],
        exports: [
            agent_service_1.AgentService,
            agent_pipeline_1.AgentPipeline,
            agent_loop_1.AgentLoop,
        ],
    })
], AgentModule);
//# sourceMappingURL=agent.module.js.map
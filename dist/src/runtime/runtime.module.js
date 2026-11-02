"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeModule = void 0;
const common_1 = require("@nestjs/common");
const runtime_service_1 = require("./runtime.service");
const runtime_loop_1 = require("./runtime.loop");
const runtime_controller_1 = require("./runtime.controller");
const runtime_state_manager_1 = require("./runtime-state.manager");
const event_bus_1 = require("../events/bus/event.bus");
const planner_module_1 = require("../planner/planner.module");
const executor_module_1 = require("../executor/executor.module");
const memory_module_1 = require("../memory/memory.module");
const ai_module_1 = require("../ai/ai.module");
const brain_module_1 = require("../brain/brain.module");
const orchestrator_module_1 = require("../orchestrator/orchestrator.module");
const scheduler_module_1 = require("../scheduler/scheduler.module");
let RuntimeModule = class RuntimeModule {
};
exports.RuntimeModule = RuntimeModule;
exports.RuntimeModule = RuntimeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            planner_module_1.PlannerModule,
            executor_module_1.ExecutorModule,
            memory_module_1.MemoryModule,
            ai_module_1.AiModule,
            brain_module_1.BrainModule,
            orchestrator_module_1.OrchestratorModule,
            scheduler_module_1.SchedulerModule
        ],
        controllers: [
            runtime_controller_1.RuntimeController
        ],
        providers: [
            runtime_service_1.RuntimeService,
            runtime_loop_1.RuntimeLoop,
            runtime_state_manager_1.RuntimeStateManager,
            event_bus_1.EventBus
        ],
        exports: [
            runtime_service_1.RuntimeService,
            runtime_loop_1.RuntimeLoop,
            runtime_state_manager_1.RuntimeStateManager
        ]
    })
], RuntimeModule);
//# sourceMappingURL=runtime.module.js.map
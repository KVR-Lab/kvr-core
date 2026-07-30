"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreHubModule = void 0;
const common_1 = require("@nestjs/common");
const brain_os_1 = require("../brain-os");
const runtime_os_1 = require("../runtime-os");
const agent_os_1 = require("../agent-os");
const kernel_os_1 = require("../kernel-os");
const system_orchestrator_1 = require("../system-orchestrator");
const mission_control_os_1 = require("../mission-control-os");
const self_improvement_os_1 = require("../self-improvement-os");
const autonomous_runtime_1 = require("../autonomous-runtime");
const system_registry_1 = require("../system-registry");
const runtime_orchestrator_1 = require("../runtime-orchestrator");
const control_api_1 = require("../control-api");
const release_manager_1 = require("../release-manager");
let CoreHubModule = class CoreHubModule {
};
exports.CoreHubModule = CoreHubModule;
exports.CoreHubModule = CoreHubModule = __decorate([
    (0, common_1.Module)({
        imports: [
            brain_os_1.BrainOsModule,
            runtime_os_1.RuntimeOsModule,
            agent_os_1.AgentOsModule,
            kernel_os_1.KernelOsModule,
            system_orchestrator_1.SystemOrchestratorModule,
            mission_control_os_1.MissionControlOsModule,
            self_improvement_os_1.SelfImprovementOsModule,
            autonomous_runtime_1.AutonomousRuntimeModule,
            system_registry_1.SystemRegistryModule,
            runtime_orchestrator_1.RuntimeOrchestratorModule,
            control_api_1.ControlApiModule,
            release_manager_1.ReleaseManagerModule
        ]
    })
], CoreHubModule);
//# sourceMappingURL=core-hub.module.js.map
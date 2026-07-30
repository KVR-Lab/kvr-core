"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const security_module_1 = require("./security/security.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const projects_module_1 = require("./projects/projects.module");
const kvrat_module_1 = require("./projects/kvrat/kvrat.module");
const project_registry_module_1 = require("./projects/registry/project-registry.module");
const project_runtime_module_1 = require("./projects/runtime/project-runtime.module");
const workspace_module_1 = require("./workspace/workspace.module");
const bootstrap_module_1 = require("./bootstrap/bootstrap.module");
const knowledge_module_1 = require("./knowledge/knowledge.module");
const command_module_1 = require("./command/command.module");
const planner_module_1 = require("./planner/planner.module");
const executor_module_1 = require("./executor/executor.module");
const memory_module_1 = require("./memory/memory.module");
const ai_module_1 = require("./ai/ai.module");
const agent_module_1 = require("./agent/agent.module");
const system_module_1 = require("./system/system.module");
const control_module_1 = require("./control/control.module");
const gateway_module_1 = require("./gateway/gateway.module");
const storage_module_1 = require("./storage/storage.module");
const monitor_module_1 = require("./monitor/monitor.module");
const scheduler_module_1 = require("./scheduler/scheduler.module");
const orchestrator_module_1 = require("./orchestrator/orchestrator.module");
const kernel_module_1 = require("./kernel/kernel.module");
const runtime_module_1 = require("./runtime/runtime.module");
const tool_module_1 = require("./tools/tool.module");
const control_plane_module_1 = require("./control-plane/control-plane.module");
const control_center_module_1 = require("./control-center/control-center.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            security_module_1.SecurityModule,
            projects_module_1.ProjectsModule,
            project_registry_module_1.ProjectRegistryModule,
            project_runtime_module_1.ProjectRuntimeModule,
            kvrat_module_1.KvratModule,
            workspace_module_1.WorkspaceModule,
            bootstrap_module_1.BootstrapModule,
            knowledge_module_1.KnowledgeModule,
            command_module_1.CommandModule,
            planner_module_1.PlannerModule,
            executor_module_1.ExecutorModule,
            memory_module_1.MemoryModule,
            ai_module_1.AiModule,
            agent_module_1.AgentModule,
            system_module_1.SystemModule,
            kernel_module_1.KvrKernelModule,
            runtime_module_1.RuntimeModule,
            gateway_module_1.GatewayModule,
            storage_module_1.StorageModule,
            tool_module_1.ToolModule,
            monitor_module_1.MonitorModule,
            scheduler_module_1.SchedulerModule,
            orchestrator_module_1.OrchestratorModule,
            control_module_1.ControlModule,
            control_plane_module_1.ControlPlaneModule,
            control_center_module_1.ControlCenterModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
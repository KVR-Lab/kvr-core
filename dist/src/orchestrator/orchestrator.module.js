"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrchestratorModule = void 0;
const common_1 = require("@nestjs/common");
const system_module_1 = require("../system/system.module");
const scheduler_module_1 = require("../scheduler/scheduler.module");
const architect_agent_1 = require("../agents/architect.agent");
const backend_agent_1 = require("../agents/backend.agent");
const frontend_agent_1 = require("../agents/frontend.agent");
const database_agent_1 = require("../agents/database.agent");
const devops_agent_1 = require("../agents/devops.agent");
const ai_agent_1 = require("../agents/ai.agent");
const lifecycle_service_1 = require("./lifecycle.service");
const orchestrator_service_1 = require("./orchestrator.service");
let OrchestratorModule = class OrchestratorModule {
};
exports.OrchestratorModule = OrchestratorModule;
exports.OrchestratorModule = OrchestratorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            system_module_1.SystemModule,
            scheduler_module_1.SchedulerModule,
        ],
        providers: [
            lifecycle_service_1.LifecycleService,
            orchestrator_service_1.OrchestratorService,
            architect_agent_1.ArchitectAgent,
            backend_agent_1.BackendAgent,
            frontend_agent_1.FrontendAgent,
            database_agent_1.DatabaseAgent,
            devops_agent_1.DevopsAgent,
            ai_agent_1.AiAgent,
        ],
        exports: [
            orchestrator_service_1.OrchestratorService,
        ],
    })
], OrchestratorModule);
//# sourceMappingURL=orchestrator.module.js.map
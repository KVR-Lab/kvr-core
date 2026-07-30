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
exports.OrchestratorService = void 0;
const common_1 = require("@nestjs/common");
const architect_agent_1 = require("../agents/architect.agent");
const backend_agent_1 = require("../agents/backend.agent");
const frontend_agent_1 = require("../agents/frontend.agent");
const database_agent_1 = require("../agents/database.agent");
const devops_agent_1 = require("../agents/devops.agent");
const ai_agent_1 = require("../agents/ai.agent");
let OrchestratorService = class OrchestratorService {
    architect;
    backend;
    frontend;
    database;
    devops;
    ai;
    constructor(architect, backend, frontend, database, devops, ai) {
        this.architect = architect;
        this.backend = backend;
        this.frontend = frontend;
        this.database = database;
        this.devops = devops;
        this.ai = ai;
    }
    get agents() {
        return [
            this.architect,
            this.backend,
            this.frontend,
            this.database,
            this.devops,
            this.ai,
        ];
    }
    async start() {
        return {
            status: 'started',
            agents: this.agents.length,
        };
    }
    async dispatch(task) {
        const agent = this.agents.find((a) => a.canHandle(task));
        if (!agent) {
            return {
                status: 'no-agent',
                task,
            };
        }
        return await agent.execute(task);
    }
};
exports.OrchestratorService = OrchestratorService;
exports.OrchestratorService = OrchestratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [architect_agent_1.ArchitectAgent,
        backend_agent_1.BackendAgent,
        frontend_agent_1.FrontendAgent,
        database_agent_1.DatabaseAgent,
        devops_agent_1.DevopsAgent,
        ai_agent_1.AiAgent])
], OrchestratorService);
//# sourceMappingURL=orchestrator.service.js.map
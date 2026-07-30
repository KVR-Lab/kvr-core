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
exports.AgentManager = void 0;
const common_1 = require("@nestjs/common");
const agent_service_1 = require("../agent/agent.service");
let AgentManager = class AgentManager {
    agent;
    constructor(agent) {
        this.agent = agent;
    }
    execute(input) {
        return this.agent.execute(input);
    }
    ask(message) {
        return this.agent.execute({
            message,
            build: false
        });
    }
    build() {
        return this.agent.execute({
            message: "Build KVRAT",
            build: true
        });
    }
    shell(command) {
        return this.agent.execute({
            message: command,
            shell: command
        });
    }
    status() {
        return {
            agent: "ready",
            mode: "manager"
        };
    }
};
exports.AgentManager = AgentManager;
exports.AgentManager = AgentManager = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agent_service_1.AgentService])
], AgentManager);
//# sourceMappingURL=agent.manager.js.map
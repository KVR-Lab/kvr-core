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
exports.ControlController = void 0;
const common_1 = require("@nestjs/common");
const command_center_1 = require("./command.center");
const agent_manager_1 = require("./agent.manager");
const runtime_manager_1 = require("./runtime.manager");
let ControlController = class ControlController {
    center;
    agent;
    runtime;
    constructor(center, agent, runtime) {
        this.center = center;
        this.agent = agent;
        this.runtime = runtime;
    }
    status() {
        return {
            system: this.center.overview(),
            agent: this.agent.status(),
            runtime: this.runtime.status()
        };
    }
};
exports.ControlController = ControlController;
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlController.prototype, "status", null);
exports.ControlController = ControlController = __decorate([
    (0, common_1.Controller)('control'),
    __metadata("design:paramtypes", [command_center_1.CommandCenter,
        agent_manager_1.AgentManager,
        runtime_manager_1.RuntimeManager])
], ControlController);
//# sourceMappingURL=control.controller.js.map
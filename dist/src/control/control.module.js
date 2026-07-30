"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlModule = void 0;
const common_1 = require("@nestjs/common");
const agent_module_1 = require("../agent/agent.module");
const runtime_module_1 = require("../runtime/runtime.module");
const command_module_1 = require("../command/command.module");
const agent_manager_1 = require("./agent.manager");
const runtime_manager_1 = require("./runtime.manager");
const command_center_1 = require("./command.center");
const control_controller_1 = require("./control.controller");
let ControlModule = class ControlModule {
};
exports.ControlModule = ControlModule;
exports.ControlModule = ControlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            agent_module_1.AgentModule,
            runtime_module_1.RuntimeModule,
            command_module_1.CommandModule
        ],
        controllers: [
            control_controller_1.ControlController
        ],
        providers: [
            agent_manager_1.AgentManager,
            runtime_manager_1.RuntimeManager,
            command_center_1.CommandCenter
        ],
        exports: [
            command_center_1.CommandCenter
        ]
    })
], ControlModule);
//# sourceMappingURL=control.module.js.map
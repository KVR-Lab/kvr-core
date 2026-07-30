"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlApiModule = void 0;
const common_1 = require("@nestjs/common");
const control_api_controller_1 = require("./control-api.controller");
const runtime_orchestrator_1 = require("../runtime-orchestrator");
let ControlApiModule = class ControlApiModule {
};
exports.ControlApiModule = ControlApiModule;
exports.ControlApiModule = ControlApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            runtime_orchestrator_1.RuntimeOrchestratorModule
        ],
        controllers: [
            control_api_controller_1.ControlApiController
        ]
    })
], ControlApiModule);
//# sourceMappingURL=control-api.module.js.map
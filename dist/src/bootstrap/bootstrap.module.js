"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapModule = void 0;
const common_1 = require("@nestjs/common");
const system_module_1 = require("../system/system.module");
const orchestrator_module_1 = require("../orchestrator/orchestrator.module");
const startup_check_1 = require("./startup.check");
const boot_service_1 = require("./boot.service");
let BootstrapModule = class BootstrapModule {
};
exports.BootstrapModule = BootstrapModule;
exports.BootstrapModule = BootstrapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            system_module_1.SystemModule,
            orchestrator_module_1.OrchestratorModule
        ],
        providers: [
            startup_check_1.StartupCheck,
            boot_service_1.BootService
        ],
        exports: [
            boot_service_1.BootService
        ]
    })
], BootstrapModule);
//# sourceMappingURL=bootstrap.module.js.map
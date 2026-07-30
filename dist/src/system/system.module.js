"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemModule = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("./logger.service");
const config_service_1 = require("./config.service");
const health_service_1 = require("./health.service");
const diagnostics_service_1 = require("./diagnostics.service");
let SystemModule = class SystemModule {
};
exports.SystemModule = SystemModule;
exports.SystemModule = SystemModule = __decorate([
    (0, common_1.Module)({
        providers: [
            logger_service_1.LoggerService,
            config_service_1.ConfigService,
            health_service_1.HealthService,
            diagnostics_service_1.DiagnosticsService
        ],
        exports: [
            logger_service_1.LoggerService,
            config_service_1.ConfigService,
            health_service_1.HealthService,
            diagnostics_service_1.DiagnosticsService
        ]
    })
], SystemModule);
//# sourceMappingURL=system.module.js.map
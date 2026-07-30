"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOsModule = void 0;
const common_1 = require("@nestjs/common");
const integration_os_service_1 = require("./integration-os.service");
let IntegrationOsModule = class IntegrationOsModule {
};
exports.IntegrationOsModule = IntegrationOsModule;
exports.IntegrationOsModule = IntegrationOsModule = __decorate([
    (0, common_1.Module)({
        providers: [integration_os_service_1.IntegrationOsService],
        exports: [integration_os_service_1.IntegrationOsService]
    })
], IntegrationOsModule);
//# sourceMappingURL=integration-os.module.js.map
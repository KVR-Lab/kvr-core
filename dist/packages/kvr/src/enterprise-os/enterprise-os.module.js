"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseOSModule = void 0;
const common_1 = require("@nestjs/common");
const enterprise_os_service_1 = require("./enterprise-os.service");
let EnterpriseOSModule = class EnterpriseOSModule {
};
exports.EnterpriseOSModule = EnterpriseOSModule;
exports.EnterpriseOSModule = EnterpriseOSModule = __decorate([
    (0, common_1.Module)({
        providers: [enterprise_os_service_1.EnterpriseOSService],
        exports: [enterprise_os_service_1.EnterpriseOSService]
    })
], EnterpriseOSModule);
//# sourceMappingURL=enterprise-os.module.js.map
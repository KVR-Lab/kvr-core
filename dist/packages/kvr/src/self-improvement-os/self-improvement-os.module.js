"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfImprovementOsModule = void 0;
const common_1 = require("@nestjs/common");
const self_improvement_os_service_1 = require("./self-improvement-os.service");
let SelfImprovementOsModule = class SelfImprovementOsModule {
};
exports.SelfImprovementOsModule = SelfImprovementOsModule;
exports.SelfImprovementOsModule = SelfImprovementOsModule = __decorate([
    (0, common_1.Module)({
        providers: [self_improvement_os_service_1.SelfImprovementOsService],
        exports: [self_improvement_os_service_1.SelfImprovementOsService]
    })
], SelfImprovementOsModule);
//# sourceMappingURL=self-improvement-os.module.js.map
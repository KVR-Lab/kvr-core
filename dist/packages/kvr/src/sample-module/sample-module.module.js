"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleModuleModule = void 0;
const common_1 = require("@nestjs/common");
const sample_module_service_1 = require("./sample-module.service");
const sample_module_controller_1 = require("./sample-module.controller");
let SampleModuleModule = class SampleModuleModule {
};
exports.SampleModuleModule = SampleModuleModule;
exports.SampleModuleModule = SampleModuleModule = __decorate([
    (0, common_1.Module)({
        controllers: [sample_module_controller_1.SampleModuleController],
        providers: [sample_module_service_1.SampleModuleService],
        exports: [sample_module_service_1.SampleModuleService],
    })
], SampleModuleModule);
//# sourceMappingURL=sample-module.module.js.map
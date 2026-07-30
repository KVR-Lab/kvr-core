"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPlaneModule = void 0;
const common_1 = require("@nestjs/common");
const control_plane_controller_1 = require("./control-plane.controller");
const control_plane_service_1 = require("./control-plane.service");
const brain_module_1 = require("../brain/brain.module");
let ControlPlaneModule = class ControlPlaneModule {
};
exports.ControlPlaneModule = ControlPlaneModule;
exports.ControlPlaneModule = ControlPlaneModule = __decorate([
    (0, common_1.Module)({
        imports: [
            brain_module_1.BrainModule,
        ],
        controllers: [
            control_plane_controller_1.ControlPlaneController,
        ],
        providers: [
            control_plane_service_1.ControlPlaneService,
        ],
        exports: [
            control_plane_service_1.ControlPlaneService,
        ],
    })
], ControlPlaneModule);
//# sourceMappingURL=control-plane.module.js.map
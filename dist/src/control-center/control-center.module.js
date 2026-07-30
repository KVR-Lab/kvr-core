"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCenterModule = void 0;
const common_1 = require("@nestjs/common");
const control_center_controller_1 = require("./control-center.controller");
const control_center_service_1 = require("./control-center.service");
let ControlCenterModule = class ControlCenterModule {
};
exports.ControlCenterModule = ControlCenterModule;
exports.ControlCenterModule = ControlCenterModule = __decorate([
    (0, common_1.Module)({
        controllers: [control_center_controller_1.ControlCenterController],
        providers: [control_center_service_1.ControlCenterService],
        exports: [control_center_service_1.ControlCenterService],
    })
], ControlCenterModule);
//# sourceMappingURL=control-center.module.js.map
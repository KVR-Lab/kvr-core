"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCenterOSModule = void 0;
const common_1 = require("@nestjs/common");
const control_center_os_service_1 = require("./control-center-os.service");
let ControlCenterOSModule = class ControlCenterOSModule {
};
exports.ControlCenterOSModule = ControlCenterOSModule;
exports.ControlCenterOSModule = ControlCenterOSModule = __decorate([
    (0, common_1.Module)({
        providers: [control_center_os_service_1.ControlCenterOSService],
        exports: [control_center_os_service_1.ControlCenterOSService]
    })
], ControlCenterOSModule);
//# sourceMappingURL=control-center-os.module.js.map
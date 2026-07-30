"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCenterController = void 0;
const common_1 = require("@nestjs/common");
const control_center_service_1 = require("./control-center.service");
let ControlCenterController = class ControlCenterController {
    controlCenterService;
    constructor(controlCenterService) {
        this.controlCenterService = controlCenterService;
    }
    getStatus() {
        return this.controlCenterService.getStatus();
    }
};
exports.ControlCenterController = ControlCenterController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlCenterController.prototype, "getStatus", null);
exports.ControlCenterController = ControlCenterController = __decorate([
    (0, common_1.Controller)('control-center'),
    __metadata("design:paramtypes", [control_center_service_1.ControlCenterService])
], ControlCenterController);
//# sourceMappingURL=control-center.controller.js.map
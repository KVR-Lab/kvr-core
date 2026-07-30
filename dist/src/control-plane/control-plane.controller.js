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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPlaneController = void 0;
const common_1 = require("@nestjs/common");
const control_plane_service_1 = require("./control-plane.service");
let ControlPlaneController = class ControlPlaneController {
    controlPlane;
    constructor(controlPlane) {
        this.controlPlane = controlPlane;
    }
    overview() {
        return this.controlPlane.overview();
    }
    health() {
        return {
            النظام: 'KVR-Core',
            الحالة: 'يعمل',
            الوقت: new Date().toISOString(),
        };
    }
    projects() {
        return this.controlPlane.projects();
    }
    agents() {
        return this.controlPlane.agents();
    }
    runtime() {
        return this.controlPlane.runtime();
    }
    commands() {
        return this.controlPlane.commands();
    }
    dashboard() {
        return this.controlPlane.dashboard();
    }
    connect() {
        return this.controlPlane.connect();
    }
    logs() {
        return this.controlPlane.logs();
    }
    memory() {
        return this.controlPlane.memory();
    }
    settings() {
        return this.controlPlane.settings();
    }
    chat(body) {
        return this.controlPlane.chat(body.message);
    }
    startAgent(body) {
        return this.controlPlane.startAgent(body.name);
    }
    stopAgent(body) {
        return this.controlPlane.stopAgent(body.name);
    }
    openProject(body) {
        return this.controlPlane.openProject(body.name);
    }
};
exports.ControlPlaneController = ControlPlaneController;
__decorate([
    (0, common_1.Get)('overview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "overview", null);
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "health", null);
__decorate([
    (0, common_1.Get)('projects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "projects", null);
__decorate([
    (0, common_1.Get)('agents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "agents", null);
__decorate([
    (0, common_1.Get)('runtime'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "runtime", null);
__decorate([
    (0, common_1.Get)('commands'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "commands", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)('connect'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "connect", null);
__decorate([
    (0, common_1.Get)('logs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "logs", null);
__decorate([
    (0, common_1.Get)('memory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "memory", null);
__decorate([
    (0, common_1.Get)('settings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "settings", null);
__decorate([
    (0, common_1.Post)('chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "chat", null);
__decorate([
    (0, common_1.Post)('agent/start'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "startAgent", null);
__decorate([
    (0, common_1.Post)('agent/stop'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "stopAgent", null);
__decorate([
    (0, common_1.Post)('project/open'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ControlPlaneController.prototype, "openProject", null);
exports.ControlPlaneController = ControlPlaneController = __decorate([
    (0, common_1.Controller)('control'),
    __metadata("design:paramtypes", [control_plane_service_1.ControlPlaneService])
], ControlPlaneController);
//# sourceMappingURL=control-plane.controller.js.map
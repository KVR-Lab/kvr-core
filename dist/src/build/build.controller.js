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
exports.BuildController = void 0;
const common_1 = require("@nestjs/common");
const build_service_1 = require("./build.service");
let BuildController = class BuildController {
    service;
    constructor(service) {
        this.service = service;
    }
    status() {
        return this.service.status();
    }
};
exports.BuildController = BuildController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildController.prototype, "status", null);
exports.BuildController = BuildController = __decorate([
    (0, common_1.Controller)('build'),
    __metadata("design:paramtypes", [build_service_1.BuildService])
], BuildController);
//# sourceMappingURL=build.controller.js.map
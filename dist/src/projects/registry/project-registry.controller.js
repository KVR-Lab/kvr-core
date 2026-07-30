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
exports.ProjectRegistryController = void 0;
const common_1 = require("@nestjs/common");
const project_registry_service_1 = require("./project-registry.service");
let ProjectRegistryController = class ProjectRegistryController {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    list() {
        return this.registry.listProjects();
    }
};
exports.ProjectRegistryController = ProjectRegistryController;
__decorate([
    (0, common_1.Get)('registry'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectRegistryController.prototype, "list", null);
exports.ProjectRegistryController = ProjectRegistryController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [project_registry_service_1.ProjectRegistryService])
], ProjectRegistryController);
//# sourceMappingURL=project-registry.controller.js.map
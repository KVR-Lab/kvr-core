"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRuntimeModule = void 0;
const common_1 = require("@nestjs/common");
const project_registry_module_1 = require("../registry/project-registry.module");
const project_runtime_service_1 = require("./project-runtime.service");
const project_runtime_controller_1 = require("./project-runtime.controller");
let ProjectRuntimeModule = class ProjectRuntimeModule {
};
exports.ProjectRuntimeModule = ProjectRuntimeModule;
exports.ProjectRuntimeModule = ProjectRuntimeModule = __decorate([
    (0, common_1.Module)({
        imports: [project_registry_module_1.ProjectRegistryModule],
        providers: [project_runtime_service_1.ProjectRuntimeService],
        controllers: [project_runtime_controller_1.ProjectRuntimeController],
    })
], ProjectRuntimeModule);
//# sourceMappingURL=project-runtime.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectOSModule = void 0;
const common_1 = require("@nestjs/common");
const project_os_service_1 = require("./project-os.service");
let ProjectOSModule = class ProjectOSModule {
};
exports.ProjectOSModule = ProjectOSModule;
exports.ProjectOSModule = ProjectOSModule = __decorate([
    (0, common_1.Module)({
        providers: [project_os_service_1.ProjectOSService],
        exports: [project_os_service_1.ProjectOSService]
    })
], ProjectOSModule);
//# sourceMappingURL=project-os.module.js.map
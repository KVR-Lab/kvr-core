"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KVROperatingSystemModule = void 0;
const common_1 = require("@nestjs/common");
const kvr_operating_system_service_1 = require("./kvr-operating-system.service");
let KVROperatingSystemModule = class KVROperatingSystemModule {
};
exports.KVROperatingSystemModule = KVROperatingSystemModule;
exports.KVROperatingSystemModule = KVROperatingSystemModule = __decorate([
    (0, common_1.Module)({
        providers: [kvr_operating_system_service_1.KVROperatingSystemService],
        exports: [kvr_operating_system_service_1.KVROperatingSystemService]
    })
], KVROperatingSystemModule);
//# sourceMappingURL=kvr-operating-system.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseManagerService = void 0;
const common_1 = require("@nestjs/common");
let ReleaseManagerService = class ReleaseManagerService {
    version = "KVR-Core-v1.0-Autonomous";
    release() {
        return {
            name: this.version,
            status: "production-ready",
            capabilities: [
                "Brain OS",
                "Runtime OS",
                "Agent OS",
                "Mission Control",
                "Self Improvement",
                "System Registry",
                "Autonomous Runtime",
                "Control API"
            ],
            timestamp: new Date()
        };
    }
    versionInfo() {
        return {
            version: this.version
        };
    }
};
exports.ReleaseManagerService = ReleaseManagerService;
exports.ReleaseManagerService = ReleaseManagerService = __decorate([
    (0, common_1.Injectable)()
], ReleaseManagerService);
//# sourceMappingURL=release-manager.service.js.map
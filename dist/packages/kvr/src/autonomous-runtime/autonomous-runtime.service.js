"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutonomousRuntimeService = void 0;
const common_1 = require("@nestjs/common");
let AutonomousRuntimeService = class AutonomousRuntimeService {
    status = "starting";
    onModuleInit() {
        this.boot();
    }
    boot() {
        console.log("================================");
        console.log("KVR AUTONOMOUS RUNTIME");
        console.log("BOOTING CORE SYSTEMS");
        console.log("================================");
        this.status = "running";
    }
    getStatus() {
        return {
            runtime: "autonomous",
            status: this.status,
            timestamp: new Date()
        };
    }
};
exports.AutonomousRuntimeService = AutonomousRuntimeService;
exports.AutonomousRuntimeService = AutonomousRuntimeService = __decorate([
    (0, common_1.Injectable)()
], AutonomousRuntimeService);
//# sourceMappingURL=autonomous-runtime.service.js.map
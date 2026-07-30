"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemRegistryService = void 0;
const common_1 = require("@nestjs/common");
let SystemRegistryService = class SystemRegistryService {
    systems = [
        "brain-os",
        "knowledge-os",
        "runtime-os",
        "agent-os",
        "kernel-os",
        "mission-control-os",
        "self-improvement-os",
        "system-orchestrator"
    ];
    list() {
        return this.systems.map(system => ({
            name: system,
            status: "registered"
        }));
    }
    register(name) {
        if (!this.systems.includes(name)) {
            this.systems.push(name);
        }
        return {
            name,
            status: "registered"
        };
    }
    health() {
        return {
            total: this.systems.length,
            systems: this.list()
        };
    }
};
exports.SystemRegistryService = SystemRegistryService;
exports.SystemRegistryService = SystemRegistryService = __decorate([
    (0, common_1.Injectable)()
], SystemRegistryService);
//# sourceMappingURL=system-registry.service.js.map
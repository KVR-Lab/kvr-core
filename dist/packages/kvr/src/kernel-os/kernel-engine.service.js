"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KernelEngineService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KernelEngineService = void 0;
const common_1 = require("@nestjs/common");
let KernelEngineService = KernelEngineService_1 = class KernelEngineService {
    logger = new common_1.Logger(KernelEngineService_1.name);
    modules = new Map();
    register(module) {
        this.modules.set(module.name, module);
        this.logger.log(`Registered ${module.name}`);
    }
    async boot() {
        this.logger.log('Booting KVR Kernel...');
        for (const module of this.modules.values()) {
            if (module.onLoad) {
                await module.onLoad();
            }
        }
        for (const module of this.modules.values()) {
            if (module.onStart) {
                await module.onStart();
            }
        }
        this.logger.log(`Kernel started (${this.modules.size} modules)`);
    }
    async shutdown() {
        for (const module of [...this.modules.values()].reverse()) {
            if (module.onStop) {
                await module.onStop();
            }
        }
        this.logger.log('Kernel stopped');
    }
    getModules() {
        return [...this.modules.keys()];
    }
};
exports.KernelEngineService = KernelEngineService;
exports.KernelEngineService = KernelEngineService = KernelEngineService_1 = __decorate([
    (0, common_1.Injectable)()
], KernelEngineService);
//# sourceMappingURL=kernel-engine.service.js.map
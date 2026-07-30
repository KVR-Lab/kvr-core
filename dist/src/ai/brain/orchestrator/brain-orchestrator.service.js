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
exports.BrainOrchestratorService = void 0;
const common_1 = require("@nestjs/common");
const memory_service_1 = require("../memory/memory.service");
const hybrid_brain_service_1 = require("../hybrid/hybrid-brain.service");
const system_brain_service_1 = require("../system-brain.service");
let BrainOrchestratorService = class BrainOrchestratorService {
    memory;
    hybrid;
    system;
    constructor(memory, hybrid, system) {
        this.memory = memory;
        this.hybrid = hybrid;
        this.system = system;
    }
    async handleMessage(message) {
        const memoryId = this.memory.save({
            input: message,
            agentsUsed: ['system'],
            createdAt: Date.now(),
        });
        const hybridResult = await this.hybrid.process({
            idea: message,
        });
        const systemResult = await this.system.process(message);
        const response = {
            hybrid: hybridResult,
            system: systemResult,
        };
        this.memory.save({
            parentId: memoryId,
            input: message,
            response,
            agentsUsed: ['system'],
            createdAt: Date.now(),
        });
        return {
            success: true,
            brain: 'system',
            response,
        };
    }
};
exports.BrainOrchestratorService = BrainOrchestratorService;
exports.BrainOrchestratorService = BrainOrchestratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memory_service_1.MemoryService,
        hybrid_brain_service_1.HybridBrainService,
        system_brain_service_1.SystemBrainService])
], BrainOrchestratorService);
//# sourceMappingURL=brain-orchestrator.service.js.map
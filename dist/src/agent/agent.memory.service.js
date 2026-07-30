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
exports.AgentMemoryService = void 0;
const common_1 = require("@nestjs/common");
const memory_service_1 = require("../memory/memory.service");
let AgentMemoryService = class AgentMemoryService {
    memory;
    constructor(memory) {
        this.memory = memory;
    }
    remember(task, result) {
        return this.memory.store({
            task,
            result,
            createdAt: new Date()
        });
    }
    recall() {
        return this.memory.getAll();
    }
};
exports.AgentMemoryService = AgentMemoryService;
exports.AgentMemoryService = AgentMemoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [memory_service_1.MemoryService])
], AgentMemoryService);
//# sourceMappingURL=agent.memory.service.js.map
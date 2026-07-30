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
exports.KnowledgeManagerService = void 0;
const common_1 = require("@nestjs/common");
const knowledge_service_1 = require("./knowledge.service");
const memory_service_1 = require("../memory/memory.service");
let KnowledgeManagerService = class KnowledgeManagerService {
    knowledge;
    memory;
    constructor(knowledge, memory) {
        this.knowledge = knowledge;
        this.memory = memory;
    }
    search(query) {
        return {
            memory: this.memory.search(query),
            knowledge: this.knowledge.search(query),
        };
    }
    reload() {
        this.knowledge.reload();
        return {
            loaded: true,
            documents: this.knowledge.getAll().length,
        };
    }
    stats() {
        return {
            memory: this.memory.getAll().count,
            documents: this.knowledge.getAll().length,
        };
    }
};
exports.KnowledgeManagerService = KnowledgeManagerService;
exports.KnowledgeManagerService = KnowledgeManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knowledge_service_1.KnowledgeService,
        memory_service_1.MemoryService])
], KnowledgeManagerService);
//# sourceMappingURL=knowledge-manager.service.js.map
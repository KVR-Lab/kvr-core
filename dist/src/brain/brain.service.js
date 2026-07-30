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
exports.BrainService = void 0;
const common_1 = require("@nestjs/common");
const llm_gateway_1 = require("../llm/llm.gateway");
const memory_service_1 = require("../memory/memory.service");
const knowledge_service_1 = require("../knowledge/knowledge.service");
let BrainService = class BrainService {
    llm;
    memory;
    knowledge;
    constructor(llm, memory, knowledge) {
        this.llm = llm;
        this.memory = memory;
        this.knowledge = knowledge;
    }
    async think(plan) {
        const question = typeof plan === "string"
            ? plan
            : JSON.stringify(plan, null, 2);
        const memoryContext = this.memory.search(question);
        const knowledgeContext = this.knowledge.search(question);
        const prompt = `
You are KVR-Core Brain.

=== MEMORY ===

${JSON.stringify(memoryContext, null, 2)}

=== KNOWLEDGE ===

${knowledgeContext
            .map(k => k.content)
            .join("\n\n")}

=== USER REQUEST ===

${question}

Provide the best answer using Memory and Knowledge before reasoning.
`;
        const answer = await this.llm.chat("ollama", prompt);
        this.memory.store({
            timestamp: new Date().toISOString(),
            question,
            answer
        });
        return answer;
    }
};
exports.BrainService = BrainService;
exports.BrainService = BrainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [llm_gateway_1.LlmGateway,
        memory_service_1.MemoryService,
        knowledge_service_1.KnowledgeService])
], BrainService);
//# sourceMappingURL=brain.service.js.map
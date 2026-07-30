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
exports.KnowledgeRepository = void 0;
const common_1 = require("@nestjs/common");
const knowledge_memory_1 = require("./knowledge.memory");
let KnowledgeRepository = class KnowledgeRepository {
    memory;
    constructor(memory = new knowledge_memory_1.KnowledgeMemory()) {
        this.memory = memory;
    }
    save(id, model, tags = []) {
        if (this.memory.exists(id)) {
            const updated = this.memory.update(id, model);
            if (updated) {
                return updated;
            }
        }
        return this.memory.save(id, model, tags);
    }
    load(id) {
        return this.memory.get(id);
    }
    delete(id) {
        return this.memory.remove(id);
    }
    exists(id) {
        return this.memory.exists(id);
    }
    list() {
        return this.memory.list();
    }
    clear() {
        this.memory.clear();
    }
    searchByTag(tag) {
        return this.memory.searchByTag(tag);
    }
    statistics() {
        return this.memory.statistics();
    }
};
exports.KnowledgeRepository = KnowledgeRepository;
exports.KnowledgeRepository = KnowledgeRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], KnowledgeRepository);
//# sourceMappingURL=knowledge.repository.js.map
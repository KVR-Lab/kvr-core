"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeMemory = void 0;
const common_1 = require("@nestjs/common");
let KnowledgeMemory = class KnowledgeMemory {
    storage = new Map();
    save(id, knowledge, tags = []) {
        const now = new Date();
        const entry = {
            id,
            createdAt: now,
            updatedAt: now,
            tags,
            knowledge
        };
        this.storage.set(id, entry);
        return entry;
    }
    update(id, knowledge) {
        const current = this.storage.get(id);
        if (!current) {
            return undefined;
        }
        current.updatedAt = new Date();
        current.knowledge = knowledge;
        this.storage.set(id, current);
        return current;
    }
    get(id) {
        return this.storage.get(id);
    }
    exists(id) {
        return this.storage.has(id);
    }
    remove(id) {
        return this.storage.delete(id);
    }
    clear() {
        this.storage.clear();
    }
    list() {
        return Array.from(this.storage.values());
    }
    searchByTag(tag) {
        return this.list().filter(entry => entry.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
    }
    statistics() {
        return {
            snapshots: this.storage.size,
            ids: Array.from(this.storage.keys())
        };
    }
};
exports.KnowledgeMemory = KnowledgeMemory;
exports.KnowledgeMemory = KnowledgeMemory = __decorate([
    (0, common_1.Injectable)()
], KnowledgeMemory);
//# sourceMappingURL=knowledge.memory.js.map
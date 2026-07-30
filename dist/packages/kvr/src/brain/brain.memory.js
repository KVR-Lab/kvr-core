"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainMemoryStore = void 0;
class BrainMemoryStore {
    memories = [];
    add(memory) {
        this.memories.push(memory);
    }
    all() {
        return [...this.memories];
    }
    find(id) {
        return this.memories.find(memory => memory.id === id);
    }
    clear() {
        this.memories.length = 0;
    }
}
exports.BrainMemoryStore = BrainMemoryStore;
//# sourceMappingURL=brain.memory.js.map
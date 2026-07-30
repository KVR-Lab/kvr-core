"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainRegistry = void 0;
class BrainRegistry {
    components = new Map();
    register(name, component) {
        this.components.set(name, component);
    }
    resolve(name) {
        return this.components.get(name);
    }
    exists(name) {
        return this.components.has(name);
    }
    remove(name) {
        return this.components.delete(name);
    }
    clear() {
        this.components.clear();
    }
    keys() {
        return [...this.components.keys()];
    }
}
exports.BrainRegistry = BrainRegistry;
//# sourceMappingURL=brain.registry.js.map
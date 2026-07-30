"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryStore = void 0;
class RegistryStore {
    items = new Map();
    register(name, value) {
        this.items.set(name, value);
    }
    resolve(name) {
        return this.items.get(name);
    }
    list() {
        return Array.from(this.items.keys());
    }
}
exports.RegistryStore = RegistryStore;
//# sourceMappingURL=registry.store.js.map
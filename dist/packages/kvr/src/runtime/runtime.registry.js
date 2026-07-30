"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeRegistry = void 0;
class RuntimeRegistry {
    services = new Map();
    register(name, service) {
        this.services.set(name, service);
    }
    get(name) {
        return this.services.get(name);
    }
    has(name) {
        return this.services.has(name);
    }
    remove(name) {
        return this.services.delete(name);
    }
    clear() {
        this.services.clear();
    }
    keys() {
        return Array.from(this.services.keys());
    }
}
exports.RuntimeRegistry = RuntimeRegistry;
//# sourceMappingURL=runtime.registry.js.map
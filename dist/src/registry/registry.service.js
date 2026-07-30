"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryService = void 0;
const registry_store_1 = require("./store/registry.store");
class RegistryService {
    store = new registry_store_1.RegistryStore();
    register(name, value) {
        this.store.register(name, value);
    }
    get(name) {
        return this.store.resolve(name);
    }
    list() {
        return this.store.list();
    }
}
exports.RegistryService = RegistryService;
//# sourceMappingURL=registry.service.js.map
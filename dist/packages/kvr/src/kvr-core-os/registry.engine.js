"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryEngine = void 0;
class RegistryEngine {
    register(service) {
        return {
            registered: true,
            data: service
        };
    }
}
exports.RegistryEngine = RegistryEngine;
//# sourceMappingURL=registry.engine.js.map
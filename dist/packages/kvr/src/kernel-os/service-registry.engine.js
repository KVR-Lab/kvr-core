"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegistryEngine = void 0;
class ServiceRegistryEngine {
    register(service) {
        return {
            registered: true,
            data: service
        };
    }
}
exports.ServiceRegistryEngine = ServiceRegistryEngine;
//# sourceMappingURL=service-registry.engine.js.map
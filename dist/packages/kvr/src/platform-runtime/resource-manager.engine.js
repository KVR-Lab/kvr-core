"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceManagerEngine = void 0;
class ResourceManagerEngine {
    allocate(resource) {
        return {
            allocated: true,
            data: resource
        };
    }
}
exports.ResourceManagerEngine = ResourceManagerEngine;
//# sourceMappingURL=resource-manager.engine.js.map
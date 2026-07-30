"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceEngine = void 0;
class ResourceEngine {
    allocate(resource) {
        return {
            allocated: true,
            resource
        };
    }
}
exports.ResourceEngine = ResourceEngine;
//# sourceMappingURL=resource.engine.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationHealthEngine = void 0;
class IntegrationHealthEngine {
    check(system) {
        return {
            healthy: true,
            system
        };
    }
}
exports.IntegrationHealthEngine = IntegrationHealthEngine;
//# sourceMappingURL=health.engine.js.map
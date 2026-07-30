"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthEngine = void 0;
class HealthEngine {
    check(system) {
        return {
            healthy: true,
            system
        };
    }
}
exports.HealthEngine = HealthEngine;
//# sourceMappingURL=health.engine.js.map
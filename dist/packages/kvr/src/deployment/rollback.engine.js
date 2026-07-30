"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollbackEngine = void 0;
class RollbackEngine {
    rollback(version) {
        return {
            rollback: true,
            version
        };
    }
}
exports.RollbackEngine = RollbackEngine;
//# sourceMappingURL=rollback.engine.js.map
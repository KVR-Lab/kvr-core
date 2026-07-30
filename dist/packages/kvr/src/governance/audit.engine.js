"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEngine = void 0;
class AuditEngine {
    log(event) {
        return {
            logged: true,
            event
        };
    }
}
exports.AuditEngine = AuditEngine;
//# sourceMappingURL=audit.engine.js.map
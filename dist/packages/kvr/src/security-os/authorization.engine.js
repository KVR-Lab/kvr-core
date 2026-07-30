"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationEngine = void 0;
class AuthorizationEngine {
    execute(input) {
        return {
            engine: "authorization",
            success: true,
            data: input
        };
    }
}
exports.AuthorizationEngine = AuthorizationEngine;
//# sourceMappingURL=authorization.engine.js.map
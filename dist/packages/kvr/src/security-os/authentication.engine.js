"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationEngine = void 0;
class AuthenticationEngine {
    execute(input) {
        return {
            engine: "authentication",
            success: true,
            data: input
        };
    }
}
exports.AuthenticationEngine = AuthenticationEngine;
//# sourceMappingURL=authentication.engine.js.map
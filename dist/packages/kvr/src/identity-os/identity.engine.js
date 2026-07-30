"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityEngine = void 0;
class IdentityEngine {
    execute(input) {
        return {
            engine: "identity",
            success: true,
            data: input
        };
    }
}
exports.IdentityEngine = IdentityEngine;
//# sourceMappingURL=identity.engine.js.map
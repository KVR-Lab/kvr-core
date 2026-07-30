"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityEngine = void 0;
class IdentityEngine {
    verify(product) {
        return {
            verified: true,
            product
        };
    }
}
exports.IdentityEngine = IdentityEngine;
//# sourceMappingURL=identity.engine.js.map
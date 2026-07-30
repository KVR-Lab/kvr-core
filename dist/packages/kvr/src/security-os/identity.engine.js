"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitySecurityEngine = void 0;
class IdentitySecurityEngine {
    verify(identity) {
        return {
            verified: true,
            identity
        };
    }
}
exports.IdentitySecurityEngine = IdentitySecurityEngine;
//# sourceMappingURL=identity.engine.js.map
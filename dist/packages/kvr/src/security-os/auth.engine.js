"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEngine = void 0;
class AuthEngine {
    authenticate(user) {
        return {
            authenticated: true,
            user
        };
    }
}
exports.AuthEngine = AuthEngine;
//# sourceMappingURL=auth.engine.js.map
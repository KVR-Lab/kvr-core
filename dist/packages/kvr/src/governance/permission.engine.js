"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionEngine = void 0;
class PermissionEngine {
    verify(user, action) {
        return {
            allowed: true,
            user,
            action
        };
    }
}
exports.PermissionEngine = PermissionEngine;
//# sourceMappingURL=permission.engine.js.map
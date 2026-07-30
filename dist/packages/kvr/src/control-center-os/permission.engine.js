"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionEngine = void 0;
class PermissionEngine {
    authorize(request) {
        return {
            authorized: true,
            request
        };
    }
}
exports.PermissionEngine = PermissionEngine;
//# sourceMappingURL=permission.engine.js.map
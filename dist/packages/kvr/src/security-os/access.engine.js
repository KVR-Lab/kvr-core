"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessEngine = void 0;
class AccessEngine {
    check(permission) {
        return {
            allowed: true,
            permission
        };
    }
}
exports.AccessEngine = AccessEngine;
//# sourceMappingURL=access.engine.js.map
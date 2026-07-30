"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextManager = void 0;
class ContextManager {
    create(data) {
        return {
            createdAt: new Date(),
            data
        };
    }
}
exports.ContextManager = ContextManager;
//# sourceMappingURL=context-manager.js.map
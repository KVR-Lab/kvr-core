"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextEngine = void 0;
class ContextEngine {
    execute(input) {
        return {
            engine: "context",
            success: true,
            data: input
        };
    }
}
exports.ContextEngine = ContextEngine;
//# sourceMappingURL=context.engine.js.map
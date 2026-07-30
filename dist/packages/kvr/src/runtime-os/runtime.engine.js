"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeEngine = void 0;
class RuntimeEngine {
    execute(input) {
        return {
            engine: "runtime",
            success: true,
            data: input
        };
    }
}
exports.RuntimeEngine = RuntimeEngine;
//# sourceMappingURL=runtime.engine.js.map
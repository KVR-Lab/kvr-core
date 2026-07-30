"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutorEngine = void 0;
class ExecutorEngine {
    execute(input) {
        return {
            engine: "executor",
            success: true,
            data: input
        };
    }
}
exports.ExecutorEngine = ExecutorEngine;
//# sourceMappingURL=executor.engine.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryIndexEngine = void 0;
class MemoryIndexEngine {
    execute(input) {
        return {
            engine: "memory-index",
            success: true,
            data: input
        };
    }
}
exports.MemoryIndexEngine = MemoryIndexEngine;
//# sourceMappingURL=memory-index.engine.js.map
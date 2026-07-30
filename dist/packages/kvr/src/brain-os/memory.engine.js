"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryEngine = void 0;
class MemoryEngine {
    execute(input) {
        return {
            engine: "memory",
            success: true,
            data: input
        };
    }
}
exports.MemoryEngine = MemoryEngine;
//# sourceMappingURL=memory.engine.js.map
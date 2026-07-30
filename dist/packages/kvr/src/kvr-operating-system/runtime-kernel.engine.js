"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeKernelEngine = void 0;
class RuntimeKernelEngine {
    execute(task) {
        return {
            executed: true,
            data: task
        };
    }
}
exports.RuntimeKernelEngine = RuntimeKernelEngine;
//# sourceMappingURL=runtime-kernel.engine.js.map
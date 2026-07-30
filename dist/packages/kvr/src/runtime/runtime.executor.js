"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeExecutor = void 0;
class RuntimeExecutor {
    execute(task) {
        task();
    }
    executeAsync(task) {
        return task();
    }
}
exports.RuntimeExecutor = RuntimeExecutor;
//# sourceMappingURL=runtime.executor.js.map
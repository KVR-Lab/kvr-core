"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionPipeline = void 0;
class ExecutionPipeline {
    async run(task) {
        return {
            executed: true,
            task
        };
    }
}
exports.ExecutionPipeline = ExecutionPipeline;
//# sourceMappingURL=execution-pipeline.js.map
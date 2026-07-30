"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineEngine = void 0;
class PipelineEngine {
    execute(input) {
        return {
            engine: "pipeline",
            success: true,
            data: input
        };
    }
}
exports.PipelineEngine = PipelineEngine;
//# sourceMappingURL=pipeline.engine.js.map
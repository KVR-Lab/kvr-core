"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowEngine = void 0;
class WorkflowEngine {
    execute(input) {
        return {
            engine: "workflow",
            success: true,
            data: input
        };
    }
}
exports.WorkflowEngine = WorkflowEngine;
//# sourceMappingURL=workflow.engine.js.map
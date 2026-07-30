"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowEngine = void 0;
class WorkflowEngine {
    start(workflow) {
        return {
            workflow,
            status: "running"
        };
    }
}
exports.WorkflowEngine = WorkflowEngine;
//# sourceMappingURL=workflow-engine.js.map
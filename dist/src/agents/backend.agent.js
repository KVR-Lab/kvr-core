"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendAgent = void 0;
class BackendAgent {
    name = "backend";
    canHandle(task) {
        return task.type == "backend";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.BackendAgent = BackendAgent;
//# sourceMappingURL=backend.agent.js.map
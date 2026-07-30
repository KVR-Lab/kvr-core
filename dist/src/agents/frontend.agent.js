"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendAgent = void 0;
class FrontendAgent {
    name = "frontend";
    canHandle(task) {
        return task.type == "frontend";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.FrontendAgent = FrontendAgent;
//# sourceMappingURL=frontend.agent.js.map
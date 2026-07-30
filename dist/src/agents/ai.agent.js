"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgent = void 0;
class AiAgent {
    name = "ai";
    canHandle(task) {
        return task.type == "ai";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.AiAgent = AiAgent;
//# sourceMappingURL=ai.agent.js.map
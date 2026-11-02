"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchitectAgent = void 0;
class ArchitectAgent {
    name = "architect";
    canHandle(task) {
        return task.type == "architect" || task.type == "project";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.ArchitectAgent = ArchitectAgent;
//# sourceMappingURL=architect.agent.js.map
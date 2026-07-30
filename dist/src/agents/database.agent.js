"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseAgent = void 0;
class DatabaseAgent {
    name = "database";
    canHandle(task) {
        return task.type == "database";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.DatabaseAgent = DatabaseAgent;
//# sourceMappingURL=database.agent.js.map
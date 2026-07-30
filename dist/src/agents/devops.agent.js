"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevopsAgent = void 0;
class DevopsAgent {
    name = "devops";
    canHandle(task) {
        return task.type == "devops";
    }
    async execute(task) {
        return {
            agent: this.name,
            status: "done",
            task
        };
    }
}
exports.DevopsAgent = DevopsAgent;
//# sourceMappingURL=devops.agent.js.map
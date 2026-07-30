"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
class TaskRouter {
    route(task) {
        return {
            task,
            target: "agent"
        };
    }
}
exports.TaskRouter = TaskRouter;
//# sourceMappingURL=task-router.js.map
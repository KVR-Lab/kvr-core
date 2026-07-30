"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainPlanner = void 0;
class BrainPlanner {
    tasks = [];
    add(task) {
        this.tasks.push(task);
    }
    complete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
        }
    }
    pending() {
        return this.tasks.filter(task => !task.completed);
    }
    all() {
        return [...this.tasks];
    }
}
exports.BrainPlanner = BrainPlanner;
//# sourceMappingURL=brain.planner.js.map
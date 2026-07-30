"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainExecutor = void 0;
class BrainExecutor {
    async run(action) {
        await action.execute();
    }
    async runMany(actions) {
        for (const action of actions) {
            await this.run(action);
        }
    }
}
exports.BrainExecutor = BrainExecutor;
//# sourceMappingURL=brain.executor.js.map
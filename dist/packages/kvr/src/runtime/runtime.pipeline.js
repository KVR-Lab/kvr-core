"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimePipeline = void 0;
class RuntimePipeline {
    steps = [];
    add(step) {
        this.steps.push(step);
    }
    remove(index) {
        this.steps.splice(index, 1);
    }
    clear() {
        this.steps.length = 0;
    }
    run() {
        for (const step of this.steps) {
            step();
        }
    }
    count() {
        return this.steps.length;
    }
}
exports.RuntimePipeline = RuntimePipeline;
//# sourceMappingURL=runtime.pipeline.js.map
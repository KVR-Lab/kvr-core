"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainDecision = void 0;
class BrainDecision {
    choose(options) {
        if (options.length === 0) {
            return null;
        }
        return options.sort((a, b) => b.score - a.score)[0];
    }
}
exports.BrainDecision = BrainDecision;
//# sourceMappingURL=brain.decision.js.map
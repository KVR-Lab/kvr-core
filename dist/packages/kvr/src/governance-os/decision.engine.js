"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernanceDecisionEngine = void 0;
class GovernanceDecisionEngine {
    decide(request) {
        return {
            approved: true,
            request
        };
    }
}
exports.GovernanceDecisionEngine = GovernanceDecisionEngine;
//# sourceMappingURL=decision.engine.js.map
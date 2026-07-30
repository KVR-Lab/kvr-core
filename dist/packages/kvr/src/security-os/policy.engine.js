"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyEngine = void 0;
class PolicyEngine {
    execute(input) {
        return {
            engine: "policy",
            success: true,
            data: input
        };
    }
}
exports.PolicyEngine = PolicyEngine;
//# sourceMappingURL=policy.engine.js.map
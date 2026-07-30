"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEngine = void 0;
class SessionEngine {
    execute(input) {
        return {
            engine: "session",
            success: true,
            data: input
        };
    }
}
exports.SessionEngine = SessionEngine;
//# sourceMappingURL=session.engine.js.map
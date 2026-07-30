"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShutdownEngine = void 0;
class ShutdownEngine {
    stop(state) {
        return {
            stopped: true,
            data: state
        };
    }
}
exports.ShutdownEngine = ShutdownEngine;
//# sourceMappingURL=shutdown.engine.js.map
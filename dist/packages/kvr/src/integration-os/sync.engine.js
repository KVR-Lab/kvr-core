"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncEngine = void 0;
class SyncEngine {
    execute(input) {
        return {
            engine: "sync",
            success: true,
            data: input
        };
    }
}
exports.SyncEngine = SyncEngine;
//# sourceMappingURL=sync.engine.js.map
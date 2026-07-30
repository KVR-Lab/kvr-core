"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageEngine = void 0;
class StorageEngine {
    execute(input) {
        return {
            engine: "storage",
            success: true,
            data: input
        };
    }
}
exports.StorageEngine = StorageEngine;
//# sourceMappingURL=storage.engine.js.map
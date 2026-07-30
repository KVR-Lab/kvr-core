"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEngine = void 0;
class ApiEngine {
    execute(input) {
        return {
            engine: "api",
            success: true,
            data: input
        };
    }
}
exports.ApiEngine = ApiEngine;
//# sourceMappingURL=api.engine.js.map
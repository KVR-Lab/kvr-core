"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayEngine = void 0;
class GatewayEngine {
    execute(input) {
        return {
            engine: "gateway",
            success: true,
            data: input
        };
    }
}
exports.GatewayEngine = GatewayEngine;
//# sourceMappingURL=gateway.engine.js.map
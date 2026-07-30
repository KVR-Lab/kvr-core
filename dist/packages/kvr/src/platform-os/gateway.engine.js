"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayEngine = void 0;
class GatewayEngine {
    route(request) {
        return {
            routed: true,
            request
        };
    }
}
exports.GatewayEngine = GatewayEngine;
//# sourceMappingURL=gateway.engine.js.map
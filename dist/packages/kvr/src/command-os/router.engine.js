"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterEngine = void 0;
class RouterEngine {
    route(request) {
        return {
            routed: true,
            request
        };
    }
}
exports.RouterEngine = RouterEngine;
//# sourceMappingURL=router.engine.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEngine = void 0;
class OrderEngine {
    execute(input) {
        return {
            engine: "order",
            success: true,
            data: input
        };
    }
}
exports.OrderEngine = OrderEngine;
//# sourceMappingURL=order.engine.js.map
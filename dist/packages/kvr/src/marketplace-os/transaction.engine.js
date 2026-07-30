"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEngine = void 0;
class TransactionEngine {
    execute(input) {
        return {
            engine: "transaction",
            success: true,
            data: input
        };
    }
}
exports.TransactionEngine = TransactionEngine;
//# sourceMappingURL=transaction.engine.js.map
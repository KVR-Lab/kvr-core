"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorEngine = void 0;
class ConnectorEngine {
    execute(input) {
        return {
            engine: "connector",
            success: true,
            data: input
        };
    }
}
exports.ConnectorEngine = ConnectorEngine;
//# sourceMappingURL=connector.engine.js.map
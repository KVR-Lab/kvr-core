"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeConnector = void 0;
class RuntimeConnector {
    connect(runtime) {
        return {
            runtime,
            status: "connected"
        };
    }
}
exports.RuntimeConnector = RuntimeConnector;
//# sourceMappingURL=runtime.connector.js.map
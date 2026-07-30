"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBusEngine = void 0;
class ServiceBusEngine {
    dispatch(message) {
        return {
            dispatched: true,
            data: message
        };
    }
}
exports.ServiceBusEngine = ServiceBusEngine;
//# sourceMappingURL=service-bus.engine.js.map
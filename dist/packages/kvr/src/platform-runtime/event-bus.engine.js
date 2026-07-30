"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBusEngine = void 0;
class EventBusEngine {
    publish(event) {
        return {
            published: true,
            data: event
        };
    }
}
exports.EventBusEngine = EventBusEngine;
//# sourceMappingURL=event-bus.engine.js.map
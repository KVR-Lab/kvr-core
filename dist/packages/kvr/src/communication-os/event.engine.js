"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationEventEngine = void 0;
class CommunicationEventEngine {
    publish(event) {
        return {
            published: true,
            event
        };
    }
}
exports.CommunicationEventEngine = CommunicationEventEngine;
//# sourceMappingURL=event.engine.js.map
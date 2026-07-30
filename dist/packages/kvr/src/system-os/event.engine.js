"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEngine = void 0;
class EventEngine {
    emit(event) {
        return {
            emitted: true,
            event
        };
    }
}
exports.EventEngine = EventEngine;
//# sourceMappingURL=event.engine.js.map
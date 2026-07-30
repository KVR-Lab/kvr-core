"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
class EventBus {
    events = [];
    publish(event) {
        this.events.push(event);
    }
    emit(event) {
        this.publish(event);
    }
    getEvents() {
        return this.events;
    }
}
exports.EventBus = EventBus;
//# sourceMappingURL=event.bus.js.map
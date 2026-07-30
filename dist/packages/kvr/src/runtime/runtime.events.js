"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeEventBus = void 0;
class RuntimeEventBus {
    events = [];
    publish(event) {
        this.events.push(event);
    }
    history() {
        return [...this.events];
    }
    clear() {
        this.events.length = 0;
    }
}
exports.RuntimeEventBus = RuntimeEventBus;
//# sourceMappingURL=runtime.events.js.map
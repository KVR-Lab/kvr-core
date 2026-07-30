"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeContext = void 0;
class RuntimeContext {
    data = new Map();
    set(key, value) {
        this.data.set(key, value);
    }
    get(key) {
        return this.data.get(key);
    }
}
exports.RuntimeContext = RuntimeContext;
//# sourceMappingURL=runtime.context.js.map
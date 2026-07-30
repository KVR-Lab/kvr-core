"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeManager = void 0;
const runtime_context_1 = require("../context/runtime.context");
class RuntimeManager {
    context = new runtime_context_1.RuntimeContext();
    initialize() {
        return this.context;
    }
}
exports.RuntimeManager = RuntimeManager;
//# sourceMappingURL=runtime.manager.js.map
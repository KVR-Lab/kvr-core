"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueEngine = void 0;
class QueueEngine {
    enqueue(job) {
        return {
            queued: true,
            job
        };
    }
}
exports.QueueEngine = QueueEngine;
//# sourceMappingURL=queue.engine.js.map
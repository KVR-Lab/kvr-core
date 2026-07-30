"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEngine = void 0;
class WebhookEngine {
    execute(input) {
        return {
            engine: "webhook",
            success: true,
            data: input
        };
    }
}
exports.WebhookEngine = WebhookEngine;
//# sourceMappingURL=webhook.engine.js.map
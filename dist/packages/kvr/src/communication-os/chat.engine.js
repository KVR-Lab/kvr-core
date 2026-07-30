"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEngine = void 0;
class ChatEngine {
    execute(input) {
        return {
            engine: "chat",
            success: true,
            data: input
        };
    }
}
exports.ChatEngine = ChatEngine;
//# sourceMappingURL=chat.engine.js.map
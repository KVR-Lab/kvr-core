"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KvrError = void 0;
class KvrError extends Error {
    constructor(message) {
        super(message);
        this.name = 'KvrError';
    }
}
exports.KvrError = KvrError;
//# sourceMappingURL=kvr.error.js.map
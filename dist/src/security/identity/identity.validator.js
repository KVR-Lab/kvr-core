"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityValidator = void 0;
class IdentityValidator {
    static validate(identity) {
        if (!identity) {
            return false;
        }
        if (identity.system !== 'KVR') {
            return false;
        }
        if (identity.status !== 'active') {
            return false;
        }
        return true;
    }
}
exports.IdentityValidator = IdentityValidator;
//# sourceMappingURL=identity.validator.js.map
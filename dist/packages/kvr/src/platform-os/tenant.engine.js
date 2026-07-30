"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantEngine = void 0;
class TenantEngine {
    create(tenant) {
        return {
            created: true,
            tenant
        };
    }
}
exports.TenantEngine = TenantEngine;
//# sourceMappingURL=tenant.engine.js.map
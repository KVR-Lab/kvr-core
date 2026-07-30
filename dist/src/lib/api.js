"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = dashboard;
const API = "http://localhost:3000";
async function dashboard() {
    const res = await fetch(`${API}/control/dashboard`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("تعذر الاتصال بـ KVR-Core");
    }
    return res.json();
}
//# sourceMappingURL=api.js.map
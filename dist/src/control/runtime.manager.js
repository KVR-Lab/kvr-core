"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeManager = void 0;
const common_1 = require("@nestjs/common");
const runtime_service_1 = require("../runtime/runtime.service");
let RuntimeManager = class RuntimeManager {
    runtime;
    constructor(runtime) {
        this.runtime = runtime;
    }
    start() {
        return {
            success: true,
            runtime: this.runtime.status(),
        };
    }
    status() {
        const runtime = this.runtime.status();
        return {
            success: true,
            state: runtime.status,
            runtime,
            timestamp: new Date().toISOString(),
        };
    }
    health() {
        return {
            ok: true,
            runtime: this.runtime.status(),
        };
    }
};
exports.RuntimeManager = RuntimeManager;
exports.RuntimeManager = RuntimeManager = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [runtime_service_1.RuntimeService])
], RuntimeManager);
//# sourceMappingURL=runtime.manager.js.map
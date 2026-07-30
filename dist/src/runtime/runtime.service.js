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
exports.RuntimeService = void 0;
const common_1 = require("@nestjs/common");
const runtime_loop_1 = require("./runtime.loop");
let RuntimeService = class RuntimeService {
    loop;
    constructor(loop) {
        this.loop = loop;
    }
    async onModuleInit() {
        this.loop.start();
    }
    status() {
        return {
            running: true,
            service: "runtime",
            startedAt: new Date().toISOString()
        };
    }
};
exports.RuntimeService = RuntimeService;
exports.RuntimeService = RuntimeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [runtime_loop_1.RuntimeLoop])
], RuntimeService);
//# sourceMappingURL=runtime.service.js.map
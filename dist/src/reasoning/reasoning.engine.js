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
exports.ReasoningEngine = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("../ai/ai.service");
let ReasoningEngine = class ReasoningEngine {
    ai;
    constructor(ai) {
        this.ai = ai;
    }
    async reason(task) {
        const text = typeof task === "string"
            ? task
            : task?.task ?? "";
        const result = await this.ai.process(text);
        return {
            goal: text,
            priority: "normal",
            analysis: result,
            steps: [
                "Analyze request",
                "Create plan",
                "Execute plan",
                "Store result"
            ],
            createdAt: new Date().toISOString()
        };
    }
};
exports.ReasoningEngine = ReasoningEngine;
exports.ReasoningEngine = ReasoningEngine = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], ReasoningEngine);
//# sourceMappingURL=reasoning.engine.js.map
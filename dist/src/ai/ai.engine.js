"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiEngine = void 0;
const common_1 = require("@nestjs/common");
let AiEngine = class AiEngine {
    generate(context) {
        return {
            type: "ai.decision",
            input: context,
            decision: "K.V.R generated decision",
            confidence: 0.85,
            createdAt: new Date()
        };
    }
};
exports.AiEngine = AiEngine;
exports.AiEngine = AiEngine = __decorate([
    (0, common_1.Injectable)()
], AiEngine);
//# sourceMappingURL=ai.engine.js.map
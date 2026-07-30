"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HybridBrainService = void 0;
const common_1 = require("@nestjs/common");
let HybridBrainService = class HybridBrainService {
    async process(input) {
        const type = this.classify(input.idea);
        return {
            brain: type === 'unknown' ? 'system' : type,
            type,
            confidence: 0.75,
            data: {
                idea: input.idea,
                status: 'processed by hybrid brain',
            },
        };
    }
    classify(idea) {
        const text = idea.toLowerCase();
        if (text.includes('app') || text.includes('saas')) {
            return 'product';
        }
        if (text.includes('system') || text.includes('architecture')) {
            return 'cto';
        }
        if (text.includes('market') || text.includes('growth')) {
            return 'strategy';
        }
        return 'unknown';
    }
};
exports.HybridBrainService = HybridBrainService;
exports.HybridBrainService = HybridBrainService = __decorate([
    (0, common_1.Injectable)()
], HybridBrainService);
//# sourceMappingURL=hybrid-brain.service.js.map
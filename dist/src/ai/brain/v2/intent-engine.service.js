"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentEngineService = void 0;
const common_1 = require("@nestjs/common");
let IntentEngineService = class IntentEngineService {
    detect(text) {
        const t = text.toLowerCase();
        const keywords = [];
        const score = {
            build: 0,
            idea: 0,
            plan: 0,
            chat: 0.3,
        };
        if (t.includes('ابني') ||
            t.includes('build') ||
            t.includes('متجر') ||
            t.includes('مشروع') ||
            t.includes('تطبيق') ||
            t.includes('system')) {
            score.build += 0.7;
            keywords.push('build');
        }
        if (t.includes('فكرة') ||
            t.includes('idea') ||
            t.includes('اقتراح')) {
            score.idea += 0.7;
            keywords.push('idea');
        }
        if (t.includes('خطة') ||
            t.includes('plan') ||
            t.includes('ازاي') ||
            t.includes('how')) {
            score.plan += 0.7;
            keywords.push('plan');
        }
        if (t.includes('مرحبا') ||
            t.includes('hello') ||
            t.includes('hi')) {
            score.chat += 0.4;
            keywords.push('chat');
        }
        const bestIntent = this.getBestIntent(score);
        return {
            intent: bestIntent,
            confidence: this.normalize(score[bestIntent]),
            keywords,
        };
    }
    getBestIntent(score) {
        return Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    }
    normalize(value) {
        if (value >= 1)
            return 0.99;
        return Math.round(value * 100) / 100;
    }
};
exports.IntentEngineService = IntentEngineService;
exports.IntentEngineService = IntentEngineService = __decorate([
    (0, common_1.Injectable)()
], IntentEngineService);
//# sourceMappingURL=intent-engine.service.js.map
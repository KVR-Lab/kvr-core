"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtoAgentService = void 0;
const common_1 = require("@nestjs/common");
let CtoAgentService = class CtoAgentService {
    analyze(idea) {
        return {
            role: 'cto',
            score: 0.85,
            output: `CTO Agent → analyzes system architecture for: ${idea}`,
            insights: [
                'Scalability risks',
                'System design',
                'Tech stack suitability'
            ]
        };
    }
};
exports.CtoAgentService = CtoAgentService;
exports.CtoAgentService = CtoAgentService = __decorate([
    (0, common_1.Injectable)()
], CtoAgentService);
//# sourceMappingURL=cto-agent.service.js.map
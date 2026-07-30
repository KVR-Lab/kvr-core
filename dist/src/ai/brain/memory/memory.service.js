"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryService = void 0;
const common_1 = require("@nestjs/common");
let MemoryService = class MemoryService {
    store = [];
    agentCache = {
        product: 0.5,
        cto: 0.5,
        strategy: 0.5,
    };
    save(record) {
        const item = {
            id: crypto.randomUUID(),
            ...record,
            outcomeScore: null,
            feedback: null,
            improved: false,
        };
        this.store.push(item);
        return item.id;
    }
    findSimilar(idea) {
        const lower = idea.toLowerCase();
        return this.store
            .filter(item => item.input?.toLowerCase().includes(lower) ||
            lower.includes(item.input?.toLowerCase()))
            .slice(-10);
    }
    updateOutcome(id, outcomeScore, feedback) {
        const item = this.store.find(x => x.id === id);
        if (!item)
            return;
        item.outcomeScore = this.clamp(outcomeScore);
        item.feedback = feedback || null;
        item.improved = true;
        this.updateAgentCache();
    }
    getAgentPerformance(agent) {
        const items = this.store.filter(r => r.agentsUsed?.includes(agent) &&
            typeof r.outcomeScore === 'number');
        if (!items.length)
            return 0.5;
        const sum = items.reduce((acc, r) => acc + r.outcomeScore, 0);
        return this.clamp(sum / items.length);
    }
    getAdaptiveWeight(agent) {
        return this.agentCache[agent] ?? 0.5;
    }
    updateAgentCache() {
        const agents = ['product', 'cto', 'strategy'];
        for (const agent of agents) {
            const items = this.store.filter(r => r.agentsUsed?.includes(agent) &&
                r.outcomeScore !== null);
            if (!items.length)
                continue;
            const avg = items.reduce((s, r) => s + r.outcomeScore, 0) / items.length;
            this.agentCache[agent] = this.clamp((this.agentCache[agent] * 0.7) + (avg * 0.3));
        }
    }
    clamp(value) {
        if (value < 0)
            return 0;
        if (value > 1)
            return 1;
        return value;
    }
    getAll() {
        return this.store;
    }
    clear() {
        this.store = [];
    }
    getCache() {
        return this.agentCache;
    }
};
exports.MemoryService = MemoryService;
exports.MemoryService = MemoryService = __decorate([
    (0, common_1.Injectable)()
], MemoryService);
//# sourceMappingURL=memory.service.js.map
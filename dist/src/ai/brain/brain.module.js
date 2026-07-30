"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainModule = void 0;
const common_1 = require("@nestjs/common");
const hybrid_brain_service_1 = require("./hybrid/hybrid-brain.service");
const product_brain_service_1 = require("./engines/product-brain.service");
const cto_brain_service_1 = require("./engines/cto-brain.service");
const strategy_brain_service_1 = require("./engines/strategy-brain.service");
const product_agent_service_1 = require("./agents/product-agent.service");
const cto_agent_service_1 = require("./agents/cto-agent.service");
const strategy_agent_service_1 = require("./agents/strategy-agent.service");
const brain_orchestrator_service_1 = require("./orchestrator/brain-orchestrator.service");
const memory_service_1 = require("./memory/memory.service");
const system_brain_service_1 = require("./system-brain.service");
const intent_engine_service_1 = require("./v2/intent-engine.service");
let BrainModule = class BrainModule {
};
exports.BrainModule = BrainModule;
exports.BrainModule = BrainModule = __decorate([
    (0, common_1.Module)({
        providers: [
            memory_service_1.MemoryService,
            hybrid_brain_service_1.HybridBrainService,
            system_brain_service_1.SystemBrainService,
            intent_engine_service_1.IntentEngineService,
            product_brain_service_1.ProductBrainService,
            cto_brain_service_1.CtoBrainService,
            strategy_brain_service_1.StrategyBrainService,
            product_agent_service_1.ProductAgentService,
            cto_agent_service_1.CtoAgentService,
            strategy_agent_service_1.StrategyAgentService,
            brain_orchestrator_service_1.BrainOrchestratorService,
        ],
        exports: [
            memory_service_1.MemoryService,
            hybrid_brain_service_1.HybridBrainService,
            system_brain_service_1.SystemBrainService,
            intent_engine_service_1.IntentEngineService,
            product_brain_service_1.ProductBrainService,
            cto_brain_service_1.CtoBrainService,
            strategy_brain_service_1.StrategyBrainService,
            product_agent_service_1.ProductAgentService,
            cto_agent_service_1.CtoAgentService,
            strategy_agent_service_1.StrategyAgentService,
            brain_orchestrator_service_1.BrainOrchestratorService,
        ],
    })
], BrainModule);
//# sourceMappingURL=brain.module.js.map
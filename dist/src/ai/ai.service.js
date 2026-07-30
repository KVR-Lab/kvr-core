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
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const hybrid_brain_service_1 = require("./brain/hybrid/hybrid-brain.service");
const brain_orchestrator_service_1 = require("./brain/orchestrator/brain-orchestrator.service");
const intent_engine_service_1 = require("./brain/v2/intent-engine.service");
const system_brain_service_1 = require("./brain/system-brain.service");
const llm_gateway_1 = require("../llm/llm.gateway");
let AiService = class AiService {
    hybrid;
    orchestrator;
    intent;
    system;
    llm;
    constructor(hybrid, orchestrator, intent, system, llm) {
        this.hybrid = hybrid;
        this.orchestrator = orchestrator;
        this.intent = intent;
        this.system = system;
        this.llm = llm;
    }
    async process(message) {
        const detected = this.intent.detect(message);
        const orchestration = await this.orchestrator.handleMessage(message);
        const blueprint = await this.system.process(message);
        const hybrid = await this.hybrid.process({
            idea: message
        });
        let llm = null;
        try {
            llm = await this.llm.chat("ollama", message);
        }
        catch (e) {
            llm = {
                provider: "ollama",
                error: e.message
            };
        }
        return {
            ok: true,
            engine: "KVR-Core",
            input: message,
            intent: detected,
            orchestrator: orchestration,
            blueprint,
            hybrid,
            llm
        };
    }
    async ask(prompt) {
        return this.process(prompt);
    }
    async execute(command) {
        return this.process(command);
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hybrid_brain_service_1.HybridBrainService,
        brain_orchestrator_service_1.BrainOrchestratorService,
        intent_engine_service_1.IntentEngineService,
        system_brain_service_1.SystemBrainService,
        llm_gateway_1.LlmGateway])
], AiService);
//# sourceMappingURL=ai.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmModule = void 0;
const common_1 = require("@nestjs/common");
const llm_manager_1 = require("./llm.manager");
const llm_factory_1 = require("./llm.factory");
const llm_gateway_1 = require("./llm.gateway");
const openai_provider_1 = require("./providers/openai.provider");
const ollama_provider_1 = require("./providers/ollama.provider");
const claude_provider_1 = require("./providers/claude.provider");
const gemini_provider_1 = require("./providers/gemini.provider");
let LlmModule = class LlmModule {
};
exports.LlmModule = LlmModule;
exports.LlmModule = LlmModule = __decorate([
    (0, common_1.Module)({
        providers: [
            llm_manager_1.LlmManager,
            openai_provider_1.OpenAIProvider,
            ollama_provider_1.OllamaProvider,
            claude_provider_1.ClaudeProvider,
            gemini_provider_1.GeminiProvider,
            llm_factory_1.LlmFactory,
            llm_gateway_1.LlmGateway
        ],
        exports: [
            llm_manager_1.LlmManager,
            openai_provider_1.OpenAIProvider,
            ollama_provider_1.OllamaProvider,
            claude_provider_1.ClaudeProvider,
            gemini_provider_1.GeminiProvider,
            llm_factory_1.LlmFactory,
            llm_gateway_1.LlmGateway
        ]
    })
], LlmModule);
//# sourceMappingURL=llm.module.js.map
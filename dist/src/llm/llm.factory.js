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
exports.LlmFactory = void 0;
const common_1 = require("@nestjs/common");
const openai_provider_1 = require("./providers/openai.provider");
const ollama_provider_1 = require("./providers/ollama.provider");
const claude_provider_1 = require("./providers/claude.provider");
const gemini_provider_1 = require("./providers/gemini.provider");
let LlmFactory = class LlmFactory {
    openai;
    ollama;
    claude;
    gemini;
    constructor(openai, ollama, claude, gemini) {
        this.openai = openai;
        this.ollama = ollama;
        this.claude = claude;
        this.gemini = gemini;
    }
    get(name) {
        switch (name.toLowerCase()) {
            case "openai": return this.openai;
            case "ollama": return this.ollama;
            case "claude": return this.claude;
            case "gemini": return this.gemini;
            default:
                return this.ollama;
        }
    }
};
exports.LlmFactory = LlmFactory;
exports.LlmFactory = LlmFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openai_provider_1.OpenAIProvider,
        ollama_provider_1.OllamaProvider,
        claude_provider_1.ClaudeProvider,
        gemini_provider_1.GeminiProvider])
], LlmFactory);
//# sourceMappingURL=llm.factory.js.map
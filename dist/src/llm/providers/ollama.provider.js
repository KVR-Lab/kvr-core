"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OllamaProvider = void 0;
const common_1 = require("@nestjs/common");
let OllamaProvider = class OllamaProvider {
    async chat(prompt) {
        const response = await fetch("http://127.0.0.1:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3.2",
                prompt,
                stream: false
            })
        });
        if (!response.ok) {
            throw new Error(`Ollama HTTP ${response.status}`);
        }
        const data = await response.json();
        return {
            provider: "ollama",
            model: data.model,
            message: data.response,
            done: data.done,
            totalDuration: data.total_duration
        };
    }
};
exports.OllamaProvider = OllamaProvider;
exports.OllamaProvider = OllamaProvider = __decorate([
    (0, common_1.Injectable)()
], OllamaProvider);
//# sourceMappingURL=ollama.provider.js.map
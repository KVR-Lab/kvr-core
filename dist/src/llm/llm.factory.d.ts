import { OpenAIProvider } from "./providers/openai.provider";
import { OllamaProvider } from "./providers/ollama.provider";
import { ClaudeProvider } from "./providers/claude.provider";
import { GeminiProvider } from "./providers/gemini.provider";
export declare class LlmFactory {
    private readonly openai;
    private readonly ollama;
    private readonly claude;
    private readonly gemini;
    constructor(openai: OpenAIProvider, ollama: OllamaProvider, claude: ClaudeProvider, gemini: GeminiProvider);
    get(name: string): OpenAIProvider | OllamaProvider | ClaudeProvider | GeminiProvider;
}

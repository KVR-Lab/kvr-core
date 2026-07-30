import { LlmProvider } from "../llm.provider";
export declare class OllamaProvider implements LlmProvider {
    chat(prompt: string): Promise<any>;
}

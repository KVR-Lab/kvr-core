import { LLMProvider } from "./llm.interface";
export declare class LocalLLMService implements LLMProvider {
    generate(prompt: string): Promise<string>;
}

import { LlmProvider } from "./llm.provider";
export declare class LlmManager {
    private provider;
    setProvider(provider: LlmProvider): void;
    chat(prompt: string): Promise<any>;
}

import { LlmProvider } from "../llm.provider";
export declare class GeminiProvider implements LlmProvider {
    chat(prompt: string): Promise<any>;
}

import { LlmProvider } from "../llm.provider";
export declare class OpenAIProvider implements LlmProvider {
    chat(prompt: string): Promise<any>;
}

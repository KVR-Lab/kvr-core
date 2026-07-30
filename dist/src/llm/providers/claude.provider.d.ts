import { LlmProvider } from "../llm.provider";
export declare class ClaudeProvider implements LlmProvider {
    chat(prompt: string): Promise<any>;
}

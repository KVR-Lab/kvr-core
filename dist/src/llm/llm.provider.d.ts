export interface LlmProvider {
    chat(prompt: string): Promise<any>;
}

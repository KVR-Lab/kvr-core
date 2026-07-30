import { LlmFactory } from "./llm.factory";
export declare class LlmGateway {
    private readonly factory;
    constructor(factory: LlmFactory);
    chat(provider: string, prompt: string): Promise<any>;
}

import OpenAI from 'openai';
export declare class ImageGeneratorService {
    private client;
    constructor();
    generate(prompt: string): Promise<{
        success: boolean;
        error: string;
        prompt?: undefined;
        image?: undefined;
    } | {
        success: boolean;
        prompt: string;
        image: OpenAI.Images.Image | undefined;
        error?: undefined;
    }>;
    private buildBrandPrompt;
}

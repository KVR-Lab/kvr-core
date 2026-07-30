export interface BrainInput {
    idea: string;
    context?: Record<string, any>;
}
export interface BrainOutput {
    brain: 'product' | 'cto' | 'strategy' | 'system';
    type: 'product' | 'cto' | 'strategy' | 'unknown';
    confidence: number;
    data: any;
}
export declare class HybridBrainService {
    process(input: BrainInput): Promise<BrainOutput>;
    private classify;
}

export type IntentType = 'build' | 'idea' | 'plan' | 'chat';
export interface IntentResult {
    intent: IntentType;
    confidence: number;
    keywords: string[];
}
export declare class IntentEngineService {
    detect(text: string): IntentResult;
    private getBestIntent;
    private normalize;
}

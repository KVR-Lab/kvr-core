export interface DecisionOption {
    id: string;
    title: string;
    score: number;
}
export declare class BrainDecision {
    choose(options: DecisionOption[]): DecisionOption | null;
}

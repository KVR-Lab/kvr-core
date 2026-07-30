export interface BrainAction {
    id: string;
    name: string;
    execute: () => Promise<void>;
}
export declare class BrainExecutor {
    run(action: BrainAction): Promise<void>;
    runMany(actions: BrainAction[]): Promise<void>;
}

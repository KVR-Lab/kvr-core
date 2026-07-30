export declare class RuntimeExecutor {
    execute(task: () => void): void;
    executeAsync(task: () => Promise<void>): Promise<void>;
}

export declare class RuntimePipeline {
    private readonly steps;
    add(step: () => void): void;
    remove(index: number): void;
    clear(): void;
    run(): void;
    count(): number;
}

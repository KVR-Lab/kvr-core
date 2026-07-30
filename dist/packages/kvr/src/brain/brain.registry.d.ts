export declare class BrainRegistry {
    private readonly components;
    register(name: string, component: unknown): void;
    resolve<T>(name: string): T | undefined;
    exists(name: string): boolean;
    remove(name: string): boolean;
    clear(): void;
    keys(): string[];
}

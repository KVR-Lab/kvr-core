export declare class RuntimeRegistry {
    private readonly services;
    register(name: string, service: unknown): void;
    get<T>(name: string): T | undefined;
    has(name: string): boolean;
    remove(name: string): boolean;
    clear(): void;
    keys(): string[];
}

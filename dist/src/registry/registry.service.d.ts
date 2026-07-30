export declare class RegistryService {
    private readonly store;
    register(name: string, value: any): void;
    get(name: string): any;
    list(): string[];
}

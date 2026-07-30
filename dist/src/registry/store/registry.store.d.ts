export declare class RegistryStore {
    private items;
    register(name: string, value: any): void;
    resolve(name: string): any;
    list(): string[];
}

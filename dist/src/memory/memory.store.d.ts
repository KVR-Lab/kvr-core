export declare class MemoryStore {
    private memories;
    save(item: any): void;
    recall(query: string): any[];
    all(): any[];
}

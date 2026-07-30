export declare class MemoryService {
    private file;
    private memory;
    constructor();
    private load;
    private persist;
    store(item: any): any;
    search(query: string): any[];
    getAll(): {
        value: any[];
        count: number;
    };
    findAll(): any[];
    clear(): {
        cleared: boolean;
    };
}

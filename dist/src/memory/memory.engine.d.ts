import { MemoryStore } from './memory.store';
export declare class MemoryEngine {
    private readonly store;
    constructor(store: MemoryStore);
    remember(data: any): {
        status: string;
        data: any;
    };
    recall(query: string): any[];
    context(): any[];
}

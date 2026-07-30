import { KnowledgeStore } from './knowledge.store';
export declare class KnowledgeEngine {
    private readonly store;
    constructor(store: KnowledgeStore);
    remember(data: any): {
        status: string;
        data: any;
    };
    search(query: string): any[];
}

import { KnowledgeService } from './knowledge.service';
import { MemoryService } from '../memory/memory.service';
export declare class KnowledgeManagerService {
    private readonly knowledge;
    private readonly memory;
    constructor(knowledge: KnowledgeService, memory: MemoryService);
    search(query: string): {
        memory: any[];
        knowledge: import("./knowledge.service").KnowledgeDocument[];
    };
    reload(): {
        loaded: boolean;
        documents: number;
    };
    stats(): {
        memory: number;
        documents: number;
    };
}

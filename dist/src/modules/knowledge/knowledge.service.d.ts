import { MemoryService } from '../../memory/memory.service';
export declare class KnowledgeService {
    private readonly memory;
    constructor(memory: MemoryService);
    loadProjectKnowledge(): {
        loaded: boolean;
        message: string;
        file?: undefined;
        size?: undefined;
    } | {
        loaded: boolean;
        file: string;
        size: number;
        message?: undefined;
    };
}

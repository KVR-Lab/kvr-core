import { KnowledgeService } from './knowledge.service';
export declare class KnowledgeController {
    private readonly knowledge;
    constructor(knowledge: KnowledgeService);
    all(): {
        name: string;
        path: string;
        size: number;
    }[];
    search(q?: string): {
        name: string;
        path: string;
    }[];
    stats(): {
        documents: number;
        characters: number;
    };
    reload(): {
        success: boolean;
        documents: number;
    };
}

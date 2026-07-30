import { KnowledgeService } from './knowledge.service';
export declare class KnowledgeController {
    private readonly knowledge;
    constructor(knowledge: KnowledgeService);
    load(): {
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

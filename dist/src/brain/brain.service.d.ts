import { LlmGateway } from "../llm/llm.gateway";
import { MemoryService } from "../memory/memory.service";
import { KnowledgeService } from "../knowledge/knowledge.service";
export declare class BrainService {
    private readonly llm;
    private readonly memory;
    private readonly knowledge;
    constructor(llm: LlmGateway, memory: MemoryService, knowledge: KnowledgeService);
    think(plan: any): Promise<any>;
}

import { MemoryService } from '../memory/memory.service';
export declare class AgentMemoryService {
    private readonly memory;
    constructor(memory: MemoryService);
    remember(task: any, result: any): any;
    recall(): {
        value: any[];
        count: number;
    };
}

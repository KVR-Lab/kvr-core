import { MemoryService } from './memory.service';
export declare class MemoryController {
    private readonly memory;
    constructor(memory: MemoryService);
    all(): {
        value: any[];
        count: number;
    };
    clear(): {
        cleared: boolean;
    };
}

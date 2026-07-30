import { KnowledgeMemory, MemoryEntry } from "./knowledge.memory";
import { KnowledgeModel } from "./knowledge.builder";
export declare class KnowledgeRepository {
    private readonly memory;
    constructor(memory?: KnowledgeMemory);
    save(id: string, model: KnowledgeModel, tags?: string[]): MemoryEntry;
    load(id: string): MemoryEntry | undefined;
    delete(id: string): boolean;
    exists(id: string): boolean;
    list(): MemoryEntry[];
    clear(): void;
    searchByTag(tag: string): MemoryEntry[];
    statistics(): {
        snapshots: number;
        ids: string[];
    };
}

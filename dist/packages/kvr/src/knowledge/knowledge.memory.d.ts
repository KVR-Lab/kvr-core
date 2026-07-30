import { KnowledgeModel } from "./knowledge.builder";
export interface MemoryEntry {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    knowledge: KnowledgeModel;
}
export declare class KnowledgeMemory {
    private readonly storage;
    save(id: string, knowledge: KnowledgeModel, tags?: string[]): MemoryEntry;
    update(id: string, knowledge: KnowledgeModel): MemoryEntry | undefined;
    get(id: string): MemoryEntry | undefined;
    exists(id: string): boolean;
    remove(id: string): boolean;
    clear(): void;
    list(): MemoryEntry[];
    searchByTag(tag: string): MemoryEntry[];
    statistics(): {
        snapshots: number;
        ids: string[];
    };
}

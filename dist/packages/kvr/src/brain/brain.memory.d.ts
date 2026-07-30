export interface BrainMemory {
    id: string;
    input: string;
    output: string;
    context: string;
    createdAt: Date;
    score?: number;
}
export declare class BrainMemoryStore {
    private readonly memories;
    add(memory: BrainMemory): void;
    all(): BrainMemory[];
    find(id: string): BrainMemory | undefined;
    clear(): void;
}

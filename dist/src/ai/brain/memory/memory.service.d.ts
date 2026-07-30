type AgentType = 'product' | 'cto' | 'strategy';
export declare class MemoryService {
    private store;
    private agentCache;
    save(record: any): any;
    findSimilar(idea: string): any[];
    updateOutcome(id: string, outcomeScore: number, feedback?: string): void;
    getAgentPerformance(agent: AgentType): number;
    getAdaptiveWeight(agent: AgentType): number;
    private updateAgentCache;
    private clamp;
    getAll(): any[];
    clear(): void;
    getCache(): Record<AgentType, number>;
}
export {};

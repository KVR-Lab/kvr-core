import { ProjectIndex } from "./project.indexer";
import { AnalysisResult } from "./project.analyzer";
import { KnowledgeGraph } from "./project.graph";
export interface ProjectSnapshot {
    timestamp: Date;
    root: string;
    index: ProjectIndex;
    analysis: AnalysisResult;
    graph: KnowledgeGraph;
}
export declare class ProjectRepository {
    private snapshot?;
    save(snapshot: ProjectSnapshot): void;
    get(): ProjectSnapshot | undefined;
    hasSnapshot(): boolean;
    clear(): void;
    getIndex(): ProjectIndex | undefined;
    getAnalysis(): AnalysisResult | undefined;
    getGraph(): KnowledgeGraph | undefined;
    updateGraph(graph: KnowledgeGraph): void;
    updateAnalysis(analysis: AnalysisResult): void;
    updateIndex(index: ProjectIndex): void;
}

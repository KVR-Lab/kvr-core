import { AnalysisResult } from "../engines/project-engine/project.analyzer";
import { KnowledgeGraph } from "../engines/project-engine/project.graph";
export interface KnowledgeNode {
    id: string;
    type: string;
    label: string;
    metadata?: Record<string, any>;
}
export interface KnowledgeEdge {
    from: string;
    to: string;
    relation: string;
}
export interface KnowledgeModel {
    generatedAt: Date;
    nodes: KnowledgeNode[];
    edges: KnowledgeEdge[];
}
export declare class KnowledgeBuilder {
    build(graph: KnowledgeGraph, analysis: AnalysisResult): KnowledgeModel;
}

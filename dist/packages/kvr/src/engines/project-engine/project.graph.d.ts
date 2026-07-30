import { ProjectAnalyzer } from "./project.analyzer";
export interface GraphNode {
    id: string;
    type: string;
    label: string;
}
export interface GraphEdge {
    from: string;
    to: string;
    relation: string;
}
export interface KnowledgeGraph {
    nodes: GraphNode[];
    edges: GraphEdge[];
}
export declare class ProjectGraph {
    private readonly analyzer;
    constructor(analyzer?: ProjectAnalyzer);
    build(root: string): KnowledgeGraph;
}

import { ProjectIndexer } from "../engines/project-engine/project.indexer";
import { ProjectAnalyzer } from "../engines/project-engine/project.analyzer";
import { ProjectGraph } from "../engines/project-engine/project.graph";
import { ProjectRepository } from "../engines/project-engine/project.repository";
export declare class KnowledgeEngineService {
    private readonly indexer;
    private readonly analyzer;
    private readonly graph;
    private readonly repository;
    constructor(indexer?: ProjectIndexer, analyzer?: ProjectAnalyzer, graph?: ProjectGraph, repository?: ProjectRepository);
    build(root: string): import("../engines/project-engine/project.repository").ProjectSnapshot | undefined;
    getKnowledge(): import("../engines/project-engine/project.repository").ProjectSnapshot | undefined;
    hasKnowledge(): boolean;
    clear(): void;
}

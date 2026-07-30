import { ProjectIndexer } from "./project.indexer";
export interface ModuleRelation {
    module: string;
    imports: string[];
    providers: string[];
    controllers: string[];
}
export interface ServiceRelation {
    service: string;
    dependencies: string[];
}
export interface ControllerRelation {
    controller: string;
    services: string[];
}
export interface AnalysisResult {
    modules: ModuleRelation[];
    services: ServiceRelation[];
    controllers: ControllerRelation[];
}
export declare class ProjectAnalyzer {
    private readonly indexer;
    constructor(indexer?: ProjectIndexer);
    analyze(root: string): AnalysisResult;
    private extractArray;
    private extractConstructorDependencies;
}

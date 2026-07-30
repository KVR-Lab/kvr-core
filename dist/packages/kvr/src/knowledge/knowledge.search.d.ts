import { KnowledgeModel, KnowledgeNode, KnowledgeEdge } from "./knowledge.builder";
export declare class KnowledgeSearch {
    byId(model: KnowledgeModel, id: string): KnowledgeNode | undefined;
    byType(model: KnowledgeModel, type: string): KnowledgeNode[];
    byName(model: KnowledgeModel, keyword: string): KnowledgeNode[];
    dependencies(model: KnowledgeModel, nodeId: string): KnowledgeEdge[];
    dependents(model: KnowledgeModel, nodeId: string): KnowledgeEdge[];
    impact(model: KnowledgeModel, nodeId: string): {
        target: KnowledgeNode | undefined;
        dependsOn: KnowledgeEdge[];
        usedBy: KnowledgeEdge[];
    };
    exists(model: KnowledgeModel, nodeId: string): boolean;
}

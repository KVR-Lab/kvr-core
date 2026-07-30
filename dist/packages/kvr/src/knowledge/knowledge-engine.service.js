"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeEngineService = void 0;
const common_1 = require("@nestjs/common");
const project_indexer_1 = require("../engines/project-engine/project.indexer");
const project_analyzer_1 = require("../engines/project-engine/project.analyzer");
const project_graph_1 = require("../engines/project-engine/project.graph");
const project_repository_1 = require("../engines/project-engine/project.repository");
let KnowledgeEngineService = class KnowledgeEngineService {
    indexer;
    analyzer;
    graph;
    repository;
    constructor(indexer = new project_indexer_1.ProjectIndexer(), analyzer = new project_analyzer_1.ProjectAnalyzer(), graph = new project_graph_1.ProjectGraph(), repository = new project_repository_1.ProjectRepository()) {
        this.indexer = indexer;
        this.analyzer = analyzer;
        this.graph = graph;
        this.repository = repository;
    }
    build(root) {
        const index = this.indexer.build(root);
        const analysis = this.analyzer.analyze(root);
        const knowledge = this.graph.build(root);
        this.repository.save({
            timestamp: new Date(),
            root,
            index,
            analysis,
            graph: knowledge
        });
        return this.repository.get();
    }
    getKnowledge() {
        return this.repository.get();
    }
    hasKnowledge() {
        return this.repository.hasSnapshot();
    }
    clear() {
        this.repository.clear();
    }
};
exports.KnowledgeEngineService = KnowledgeEngineService;
exports.KnowledgeEngineService = KnowledgeEngineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], KnowledgeEngineService);
//# sourceMappingURL=knowledge-engine.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectGraph = void 0;
const project_analyzer_1 = require("./project.analyzer");
class ProjectGraph {
    analyzer;
    constructor(analyzer = new project_analyzer_1.ProjectAnalyzer()) {
        this.analyzer = analyzer;
    }
    build(root) {
        const analysis = this.analyzer.analyze(root);
        const graph = {
            nodes: [],
            edges: []
        };
        for (const module of analysis.modules) {
            graph.nodes.push({
                id: module.module,
                type: "module",
                label: module.module
            });
            for (const provider of module.providers) {
                graph.edges.push({
                    from: module.module,
                    to: provider,
                    relation: "provides"
                });
            }
            for (const controller of module.controllers) {
                graph.edges.push({
                    from: module.module,
                    to: controller,
                    relation: "controls"
                });
            }
            for (const imported of module.imports) {
                graph.edges.push({
                    from: module.module,
                    to: imported,
                    relation: "imports"
                });
            }
        }
        for (const service of analysis.services) {
            graph.nodes.push({
                id: service.service,
                type: "service",
                label: service.service
            });
            for (const dependency of service.dependencies) {
                graph.edges.push({
                    from: service.service,
                    to: dependency,
                    relation: "depends_on"
                });
            }
        }
        for (const controller of analysis.controllers) {
            graph.nodes.push({
                id: controller.controller,
                type: "controller",
                label: controller.controller
            });
            for (const service of controller.services) {
                graph.edges.push({
                    from: controller.controller,
                    to: service,
                    relation: "uses"
                });
            }
        }
        return graph;
    }
}
exports.ProjectGraph = ProjectGraph;
//# sourceMappingURL=project.graph.js.map
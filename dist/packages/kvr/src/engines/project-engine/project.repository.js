"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
class ProjectRepository {
    snapshot;
    save(snapshot) {
        this.snapshot = snapshot;
    }
    get() {
        return this.snapshot;
    }
    hasSnapshot() {
        return this.snapshot !== undefined;
    }
    clear() {
        this.snapshot = undefined;
    }
    getIndex() {
        return this.snapshot?.index;
    }
    getAnalysis() {
        return this.snapshot?.analysis;
    }
    getGraph() {
        return this.snapshot?.graph;
    }
    updateGraph(graph) {
        if (!this.snapshot) {
            return;
        }
        this.snapshot.graph = graph;
        this.snapshot.timestamp = new Date();
    }
    updateAnalysis(analysis) {
        if (!this.snapshot) {
            return;
        }
        this.snapshot.analysis = analysis;
        this.snapshot.timestamp = new Date();
    }
    updateIndex(index) {
        if (!this.snapshot) {
            return;
        }
        this.snapshot.index = index;
        this.snapshot.timestamp = new Date();
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=project.repository.js.map
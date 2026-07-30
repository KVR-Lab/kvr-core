"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeSearch = void 0;
const common_1 = require("@nestjs/common");
let KnowledgeSearch = class KnowledgeSearch {
    byId(model, id) {
        return model.nodes.find(n => n.id.toLowerCase() === id.toLowerCase());
    }
    byType(model, type) {
        return model.nodes.filter(n => n.type.toLowerCase() === type.toLowerCase());
    }
    byName(model, keyword) {
        const value = keyword.toLowerCase();
        return model.nodes.filter(n => n.label.toLowerCase().includes(value) ||
            n.id.toLowerCase().includes(value));
    }
    dependencies(model, nodeId) {
        return model.edges.filter(e => e.from === nodeId);
    }
    dependents(model, nodeId) {
        return model.edges.filter(e => e.to === nodeId);
    }
    impact(model, nodeId) {
        return {
            target: this.byId(model, nodeId),
            dependsOn: this.dependencies(model, nodeId),
            usedBy: this.dependents(model, nodeId)
        };
    }
    exists(model, nodeId) {
        return this.byId(model, nodeId) !== undefined;
    }
};
exports.KnowledgeSearch = KnowledgeSearch;
exports.KnowledgeSearch = KnowledgeSearch = __decorate([
    (0, common_1.Injectable)()
], KnowledgeSearch);
//# sourceMappingURL=knowledge.search.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAnalyzer = void 0;
const fs = __importStar(require("fs"));
const project_indexer_1 = require("./project.indexer");
class ProjectAnalyzer {
    indexer;
    constructor(indexer = new project_indexer_1.ProjectIndexer()) {
        this.indexer = indexer;
    }
    analyze(root) {
        const index = this.indexer.build(root);
        const result = {
            modules: [],
            services: [],
            controllers: []
        };
        for (const moduleFile of index.modules) {
            const code = fs.readFileSync(moduleFile.path, "utf8");
            result.modules.push({
                module: moduleFile.name,
                imports: this.extractArray(code, "imports"),
                providers: this.extractArray(code, "providers"),
                controllers: this.extractArray(code, "controllers")
            });
        }
        for (const serviceFile of index.services) {
            const code = fs.readFileSync(serviceFile.path, "utf8");
            result.services.push({
                service: serviceFile.name,
                dependencies: this.extractConstructorDependencies(code)
            });
        }
        for (const controllerFile of index.controllers) {
            const code = fs.readFileSync(controllerFile.path, "utf8");
            result.controllers.push({
                controller: controllerFile.name,
                services: this.extractConstructorDependencies(code)
            });
        }
        return result;
    }
    extractArray(code, key) {
        const regex = new RegExp(`${key}\\s*:\\s*\\[(.*?)\\]`, "s");
        const match = code.match(regex);
        if (!match) {
            return [];
        }
        return match[1]
            .split(",")
            .map(v => v.trim())
            .filter(Boolean);
    }
    extractConstructorDependencies(code) {
        const regex = /constructor\s*\(([\s\S]*?)\)/m;
        const match = code.match(regex);
        if (!match) {
            return [];
        }
        return match[1]
            .split(",")
            .map(line => {
            const parts = line.split(":");
            return parts.length > 1
                ? parts[1].trim()
                : "";
        })
            .filter(Boolean);
    }
}
exports.ProjectAnalyzer = ProjectAnalyzer;
//# sourceMappingURL=project.analyzer.js.map
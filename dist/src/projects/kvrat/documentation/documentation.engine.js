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
exports.DocumentationEngine = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const architecture_generator_1 = require("./generators/architecture.generator");
const modules_generator_1 = require("./generators/modules.generator");
const api_generator_1 = require("./generators/api.generator");
const database_generator_1 = require("./generators/database.generator");
const maintenance_generator_1 = require("./generators/maintenance.generator");
class DocumentationEngine {
    root;
    constructor(root) {
        this.root = root;
    }
    generate() {
        const docs = path.join(this.root, "docs");
        fs.mkdirSync(docs, { recursive: true });
        new architecture_generator_1.ArchitectureGenerator(this.root).generate();
        new modules_generator_1.ModulesGenerator(this.root).generate();
        new api_generator_1.ApiGenerator(this.root).generate();
        new database_generator_1.DatabaseGenerator(this.root).generate();
        new maintenance_generator_1.MaintenanceGenerator(this.root).generate();
        return {
            success: true,
            output: docs,
            generated: [
                "ARCHITECTURE.md",
                "MODULES_MAP.md",
                "API_MAP.md",
                "DATABASE_MAP.md",
                "MAINTENANCE.md",
            ],
        };
    }
}
exports.DocumentationEngine = DocumentationEngine;
//# sourceMappingURL=documentation.engine.js.map
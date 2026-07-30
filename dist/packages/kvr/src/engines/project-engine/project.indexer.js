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
exports.ProjectIndexer = void 0;
const path = __importStar(require("path"));
const project_scanner_1 = require("./project.scanner");
class ProjectIndexer {
    scanner;
    constructor(scanner = new project_scanner_1.ProjectScanner()) {
        this.scanner = scanner;
    }
    build(root) {
        const scan = this.scanner.scan(root);
        const index = {
            modules: [],
            controllers: [],
            services: [],
            entities: [],
            dto: [],
            interfaces: [],
            events: [],
            configs: [],
            tests: [],
            others: []
        };
        for (const file of scan.files) {
            const item = {
                name: file.name,
                path: file.path,
                extension: file.extension,
                category: this.detect(file.path)
            };
            switch (item.category) {
                case "module":
                    index.modules.push(item);
                    break;
                case "controller":
                    index.controllers.push(item);
                    break;
                case "service":
                    index.services.push(item);
                    break;
                case "entity":
                    index.entities.push(item);
                    break;
                case "dto":
                    index.dto.push(item);
                    break;
                case "interface":
                    index.interfaces.push(item);
                    break;
                case "event":
                    index.events.push(item);
                    break;
                case "config":
                    index.configs.push(item);
                    break;
                case "test":
                    index.tests.push(item);
                    break;
                default:
                    index.others.push(item);
            }
        }
        return index;
    }
    detect(file) {
        const name = path.basename(file).toLowerCase();
        if (name.endsWith(".module.ts"))
            return "module";
        if (name.endsWith(".controller.ts"))
            return "controller";
        if (name.endsWith(".service.ts"))
            return "service";
        if (name.endsWith(".entity.ts"))
            return "entity";
        if (name.endsWith(".dto.ts"))
            return "dto";
        if (name.endsWith(".interface.ts"))
            return "interface";
        if (name.endsWith(".event.ts"))
            return "event";
        if (name.includes("config"))
            return "config";
        if (name.endsWith(".spec.ts") ||
            name.endsWith(".test.ts")) {
            return "test";
        }
        return "other";
    }
}
exports.ProjectIndexer = ProjectIndexer;
//# sourceMappingURL=project.indexer.js.map
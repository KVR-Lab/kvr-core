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
exports.KnowledgeLoader = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yaml = __importStar(require("yaml"));
class KnowledgeLoader {
    cache = {};
    load() {
        const root = "D:/kvr-core/knowledge/kvrat";
        const files = fs.readdirSync(root);
        for (const file of files) {
            const full = path.join(root, file);
            const text = fs.readFileSync(full, "utf8");
            if (file.endsWith(".yaml")) {
                this.cache[file] = yaml.parse(text);
            }
            else if (file.endsWith(".json")) {
                this.cache[file] = JSON.parse(text);
            }
            else {
                this.cache[file] = text;
            }
        }
        return this.cache;
    }
    get(name) {
        return this.cache[name];
    }
}
exports.KnowledgeLoader = KnowledgeLoader;
//# sourceMappingURL=knowledge-loader.service.js.map
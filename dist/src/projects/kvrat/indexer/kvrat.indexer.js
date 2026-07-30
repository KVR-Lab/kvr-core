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
exports.KvratIndexer = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class KvratIndexer {
    root = "D:\\KVRAT.ai";
    scan(dir = this.root) {
        let files = 0;
        let directories = 0;
        const apps = [];
        const packages = [];
        const walk = (current) => {
            if (!fs.existsSync(current))
                return;
            for (const item of fs.readdirSync(current)) {
                const full = path.join(current, item);
                const stat = fs.statSync(full);
                if (stat.isDirectory()) {
                    directories++;
                    if (path.dirname(full) === path.join(this.root, "apps")) {
                        apps.push(item);
                    }
                    if (path.dirname(full) === path.join(this.root, "packages")) {
                        packages.push(item);
                    }
                    if (item === "node_modules" ||
                        item === ".git" ||
                        item === ".next" ||
                        item === "dist" ||
                        item === "build") {
                        continue;
                    }
                    walk(full);
                }
                else {
                    files++;
                }
            }
        };
        walk(dir);
        return {
            project: "KVRAT.ai",
            root: this.root,
            files,
            directories,
            sourceFiles: files,
            apps,
            packages,
            lastIndexed: new Date().toISOString()
        };
    }
}
exports.KvratIndexer = KvratIndexer;
//# sourceMappingURL=kvrat.indexer.js.map
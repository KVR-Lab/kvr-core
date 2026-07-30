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
exports.ModulesGenerator = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class ModulesGenerator {
    root;
    constructor(root) {
        this.root = root;
    }
    generate() {
        const src = path.join(this.root, "src");
        const modules = [];
        const scan = (dir) => {
            if (!fs.existsSync(dir))
                return;
            for (const item of fs.readdirSync(dir)) {
                const file = path.join(dir, item);
                if (fs.statSync(file).isDirectory()) {
                    scan(file);
                    continue;
                }
                if (item.endsWith(".module.ts") &&
                    !item.endsWith(".module.spec.ts")) {
                    modules.push(path.relative(src, file));
                }
            }
        };
        scan(src);
        const lines = [];
        lines.push("# Modules Map");
        lines.push("");
        lines.push(`Generated: ${new Date().toISOString()}`);
        lines.push("");
        lines.push(`Total Modules: ${modules.length}`);
        lines.push("");
        for (const module of modules.sort()) {
            lines.push(`- ${module}`);
        }
        fs.writeFileSync(path.join(this.root, "docs", "MODULES_MAP.md"), lines.join("\n"), "utf8");
        return {
            modules: modules.length,
        };
    }
}
exports.ModulesGenerator = ModulesGenerator;
//# sourceMappingURL=modules.generator.js.map
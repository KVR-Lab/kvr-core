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
exports.ApiGenerator = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class ApiGenerator {
    root;
    constructor(root) {
        this.root = root;
    }
    generate() {
        const src = path.join(this.root, "src");
        const apis = [];
        const scan = (dir) => {
            if (!fs.existsSync(dir))
                return;
            for (const item of fs.readdirSync(dir)) {
                const file = path.join(dir, item);
                if (fs.statSync(file).isDirectory()) {
                    scan(file);
                    continue;
                }
                if (!item.endsWith(".controller.ts"))
                    continue;
                const text = fs.readFileSync(file, "utf8");
                const controller = text.match(/@Controller\((.*?)\)/)?.[1]
                    ?.replace(/['"`]/g, "")
                    .trim() ?? "";
                const methods = [
                    ...text.matchAll(/@(Get|Post|Put|Patch|Delete)\((.*?)\)/g),
                ];
                for (const m of methods) {
                    const verb = m[1].toUpperCase();
                    const route = m[2]
                        .replace(/['"`]/g, "")
                        .trim();
                    apis.push(`${verb} /${controller}${route ? "/" + route : ""}`);
                }
            }
        };
        scan(src);
        const lines = [];
        lines.push("# API Map");
        lines.push("");
        lines.push(`Generated: ${new Date().toISOString()}`);
        lines.push("");
        lines.push(`Total Endpoints: ${apis.length}`);
        lines.push("");
        apis.sort().forEach((x) => lines.push(`- ${x}`));
        fs.writeFileSync(path.join(this.root, "docs", "API_MAP.md"), lines.join("\n"), "utf8");
        return {
            endpoints: apis.length,
        };
    }
}
exports.ApiGenerator = ApiGenerator;
//# sourceMappingURL=api.generator.js.map
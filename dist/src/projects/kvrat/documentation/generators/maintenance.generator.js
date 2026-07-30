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
exports.MaintenanceGenerator = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class MaintenanceGenerator {
    root;
    constructor(root) {
        this.root = root;
    }
    generate() {
        const checks = [
            { name: "package.json", file: "package.json" },
            { name: "README.md", file: "README.md" },
            { name: ".env", file: ".env" },
            { name: "Dockerfile", file: "Dockerfile" },
            { name: "pnpm-workspace.yaml", file: "pnpm-workspace.yaml" },
            { name: "apps", file: "apps" },
            { name: "src", file: "src" },
        ];
        const lines = [];
        lines.push("# Maintenance");
        lines.push("");
        lines.push(`Generated: ${new Date().toISOString()}`);
        lines.push("");
        lines.push("## Project Health");
        lines.push("");
        for (const check of checks) {
            const exists = fs.existsSync(path.join(this.root, check.file));
            lines.push(`- ${exists ? "✅" : "❌"} ${check.name}`);
        }
        lines.push("");
        lines.push("## Commands");
        lines.push("");
        lines.push("```");
        lines.push("pnpm install");
        lines.push("pnpm build");
        lines.push("pnpm start:dev");
        lines.push("```");
        fs.writeFileSync(path.join(this.root, "docs", "MAINTENANCE.md"), lines.join("\n"), "utf8");
        return true;
    }
}
exports.MaintenanceGenerator = MaintenanceGenerator;
//# sourceMappingURL=maintenance.generator.js.map
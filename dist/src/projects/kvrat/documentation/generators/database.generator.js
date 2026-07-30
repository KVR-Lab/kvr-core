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
exports.DatabaseGenerator = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class DatabaseGenerator {
    root;
    constructor(root) {
        this.root = root;
    }
    generate() {
        const prisma = path.join(this.root, "prisma", "schema.prisma");
        const lines = [];
        lines.push("# Database Map");
        lines.push("");
        lines.push(`Generated: ${new Date().toISOString()}`);
        lines.push("");
        if (!fs.existsSync(prisma)) {
            lines.push("Database not configured.");
        }
        else {
            const schema = fs.readFileSync(prisma, "utf8");
            const models = [...schema.matchAll(/^model\s+(\w+)/gm)].map((m) => m[1]);
            const enums = [...schema.matchAll(/^enum\s+(\w+)/gm)].map((m) => m[1]);
            lines.push("## Models");
            lines.push("");
            models.forEach((m) => lines.push(`- ${m}`));
            lines.push("");
            lines.push("## Enums");
            lines.push("");
            enums.forEach((e) => lines.push(`- ${e}`));
        }
        fs.writeFileSync(path.join(this.root, "docs", "DATABASE_MAP.md"), lines.join("\n"), "utf8");
        return true;
    }
}
exports.DatabaseGenerator = DatabaseGenerator;
//# sourceMappingURL=database.generator.js.map
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KvratReportWriter = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const common_1 = require("@nestjs/common");
const kvrat_report_1 = require("./kvrat.report");
let KvratReportWriter = class KvratReportWriter {
    report;
    target = "D:\\KVRAT.ai\\docs";
    constructor(report) {
        this.report = report;
    }
    generateFiles() {
        const data = this.report.generate();
        if (!fs.existsSync(this.target)) {
            fs.mkdirSync(this.target, {
                recursive: true
            });
        }
        const content = `# KVRAT.ai Project Status

Generated: ${data.generatedAt}

## Progress

${data.progress}

## Completed

${data.completed
            .map(item => `- ${item}`)
            .join("\n")}


## Missing

${data.missing
            .map(item => `- ${item}`)
            .join("\n")}


## Applications

${data.apps
            .map(item => `- ${item}`)
            .join("\n")}


## Checks

\`\`\`json
${JSON.stringify(data.checks, null, 2)}
\`\`\`
`;
        fs.writeFileSync(path.join(this.target, "PROJECT_STATUS.md"), content, "utf8");
        return {
            success: true,
            file: "D:\\KVRAT.ai\\docs\\PROJECT_STATUS.md"
        };
    }
};
exports.KvratReportWriter = KvratReportWriter;
exports.KvratReportWriter = KvratReportWriter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [kvrat_report_1.KvratReport])
], KvratReportWriter);
//# sourceMappingURL=kvrat.report.writer.js.map
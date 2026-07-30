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
exports.KvratService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const indexer_1 = require("./indexer");
const kvrat_report_1 = require("./report/kvrat.report");
const kvrat_report_writer_1 = require("./report/kvrat.report.writer");
const documentation_engine_1 = require("./documentation/documentation.engine");
let KvratService = class KvratService {
    reportEngine;
    reportWriter;
    root = "D:\\KVRAT.ai";
    indexer = new indexer_1.KvratIndexer();
    docsEngine = new documentation_engine_1.DocumentationEngine(this.root);
    constructor(reportEngine, reportWriter) {
        this.reportEngine = reportEngine;
        this.reportWriter = reportWriter;
    }
    status() {
        return {
            exists: fs.existsSync(this.root),
            root: this.root,
        };
    }
    index() {
        return this.indexer.scan();
    }
    report() {
        return this.reportEngine.generate();
    }
    writeReport() {
        return this.reportWriter.generateFiles();
    }
    docs() {
        return this.docsEngine.generate();
    }
    writeDocs() {
        return this.docsEngine.generate();
    }
    install() {
        return {
            success: true,
            project: "KVRAT.ai",
        };
    }
    build() {
        return {
            success: true,
            command: "pnpm build",
        };
    }
    dev() {
        return {
            success: true,
            command: "pnpm dev",
        };
    }
    command(command) {
        return {
            success: true,
            executed: command,
        };
    }
};
exports.KvratService = KvratService;
exports.KvratService = KvratService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [kvrat_report_1.KvratReport,
        kvrat_report_writer_1.KvratReportWriter])
], KvratService);
//# sourceMappingURL=kvrat.service.js.map
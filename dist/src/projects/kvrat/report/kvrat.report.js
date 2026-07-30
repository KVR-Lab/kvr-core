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
exports.KvratReport = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class KvratReport {
    root = "D:\\KVRAT.ai";
    generate() {
        const exists = (p) => fs.existsSync(path.join(this.root, p));
        const apps = [
            "backend",
            "kvrat-landing",
            "web",
            "mobile"
        ].filter(app => exists(`apps\\${app}`));
        const checks = {
            backend: exists("apps\\backend"),
            landing: exists("apps\\kvrat-landing"),
            web: exists("apps\\web"),
            mobile: exists("apps\\mobile"),
            packages: exists("packages"),
            docker: exists("docker-compose.yml"),
            workspace: exists("pnpm-workspace.yaml"),
            env: exists(".env.example"),
            readme: exists("README.md"),
            git: exists(".git")
        };
        const completed = [];
        const missing = [];
        if (checks.backend)
            completed.push("NestJS Backend");
        else
            missing.push("Backend");
        if (checks.landing)
            completed.push("Landing Application");
        else
            missing.push("Landing");
        if (checks.web)
            completed.push("Web Application");
        else
            missing.push("Web Application");
        if (checks.mobile)
            completed.push("Mobile Application");
        else
            missing.push("Mobile Application");
        if (checks.packages)
            completed.push("Shared Packages");
        else
            missing.push("Shared Packages");
        if (checks.docker)
            completed.push("Docker Environment");
        else
            missing.push("Docker");
        if (checks.workspace)
            completed.push("Monorepo Workspace");
        else
            missing.push("Workspace Configuration");
        if (checks.env)
            completed.push("Environment Configuration");
        else
            missing.push(".env Configuration");
        const total = Object.keys(checks).length;
        const done = Object.values(checks)
            .filter(Boolean).length;
        return {
            project: "KVRAT.ai",
            root: this.root,
            progress: Math.round((done / total) * 100) + "%",
            apps,
            completed,
            missing,
            checks,
            generatedAt: new Date().toISOString()
        };
    }
}
exports.KvratReport = KvratReport;
//# sourceMappingURL=kvrat.report.js.map
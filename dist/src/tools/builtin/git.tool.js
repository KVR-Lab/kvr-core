"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTool = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
let GitTool = class GitTool {
    run(command) {
        try {
            const output = (0, child_process_1.execSync)(`git ${command}`, {
                encoding: "utf8",
                stdio: "pipe"
            });
            return {
                success: true,
                command,
                output
            };
        }
        catch (e) {
            return {
                success: false,
                command,
                error: e.message,
                output: e.stdout?.toString() ?? ""
            };
        }
    }
    status() {
        return this.run("status");
    }
    branch() {
        return this.run("branch");
    }
    log() {
        return this.run("log --oneline -5");
    }
};
exports.GitTool = GitTool;
exports.GitTool = GitTool = __decorate([
    (0, common_1.Injectable)()
], GitTool);
//# sourceMappingURL=git.tool.js.map
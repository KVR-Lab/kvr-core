"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolRegistry = void 0;
const common_1 = require("@nestjs/common");
const file_tool_1 = require("./builtin/file.tool");
const terminal_tool_1 = require("./builtin/terminal.tool");
const git_tool_1 = require("./builtin/git.tool");
let ToolRegistry = class ToolRegistry {
    file;
    terminal;
    git;
    tools = new Map();
    constructor(file, terminal, git) {
        this.file = file;
        this.terminal = terminal;
        this.git = git;
        this.register("file.read", this.file.read.bind(this.file));
        this.register("file.write", this.file.write.bind(this.file));
        this.register("file.list", this.file.list.bind(this.file));
        this.register("terminal.run", this.terminal.run.bind(this.terminal));
        this.register("git.status", this.git.status.bind(this.git));
        this.register("git.branch", this.git.branch.bind(this.git));
        this.register("git.log", this.git.log.bind(this.git));
    }
    register(name, fn) {
        this.tools.set(name, fn);
    }
    get(name) {
        return this.tools.get(name);
    }
    list() {
        return [...this.tools.keys()];
    }
};
exports.ToolRegistry = ToolRegistry;
exports.ToolRegistry = ToolRegistry = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_tool_1.FileTool,
        terminal_tool_1.TerminalTool,
        git_tool_1.GitTool])
], ToolRegistry);
//# sourceMappingURL=tool.registry.js.map
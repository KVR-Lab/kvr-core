"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolModule = void 0;
const common_1 = require("@nestjs/common");
const tool_registry_1 = require("./tool.registry");
const tool_router_1 = require("./tool.router");
const tool_controller_1 = require("./tool.controller");
const file_tool_1 = require("./builtin/file.tool");
const terminal_tool_1 = require("./builtin/terminal.tool");
const git_tool_1 = require("./builtin/git.tool");
let ToolModule = class ToolModule {
};
exports.ToolModule = ToolModule;
exports.ToolModule = ToolModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            tool_controller_1.ToolController
        ],
        providers: [
            tool_registry_1.ToolRegistry,
            tool_router_1.ToolRouter,
            file_tool_1.FileTool,
            terminal_tool_1.TerminalTool,
            git_tool_1.GitTool
        ],
        exports: [
            tool_registry_1.ToolRegistry,
            tool_router_1.ToolRouter
        ]
    })
], ToolModule);
//# sourceMappingURL=tool.module.js.map
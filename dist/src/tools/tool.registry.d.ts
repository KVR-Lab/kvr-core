import { FileTool } from "./builtin/file.tool";
import { TerminalTool } from "./builtin/terminal.tool";
import { GitTool } from "./builtin/git.tool";
export declare class ToolRegistry {
    private readonly file;
    private readonly terminal;
    private readonly git;
    private tools;
    constructor(file: FileTool, terminal: TerminalTool, git: GitTool);
    register(name: string, fn: Function): void;
    get(name: string): Function | undefined;
    list(): string[];
}

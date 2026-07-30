import { ToolRegistry } from "./tool.registry";
export declare class ToolRouter {
    private readonly registry;
    constructor(registry: ToolRegistry);
    execute(name: string, ...args: any[]): any;
}

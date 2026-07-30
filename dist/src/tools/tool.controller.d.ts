import { ToolRegistry } from "./tool.registry";
export declare class ToolController {
    private readonly registry;
    constructor(registry: ToolRegistry);
    list(): string[];
    execute(body: any): any;
}

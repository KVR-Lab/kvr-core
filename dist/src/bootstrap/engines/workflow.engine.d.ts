import { BootstrapEngine } from "./engine.interface";
export declare class WorkflowEngine implements BootstrapEngine {
    readonly name = "workflow";
    boot(): void;
}

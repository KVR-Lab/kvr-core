import { BootstrapEngine } from "./engine.interface";
export declare class PipelineEngine implements BootstrapEngine {
    readonly name = "pipeline";
    boot(): void;
}

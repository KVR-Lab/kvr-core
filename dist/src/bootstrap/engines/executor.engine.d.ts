import { BootstrapEngine } from "./engine.interface";
export declare class ExecutorEngine implements BootstrapEngine {
    readonly name = "Executor";
    boot(): void;
}

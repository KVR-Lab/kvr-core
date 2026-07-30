import { BootstrapEngine } from "./engine.interface";
export declare class RuntimeEngine implements BootstrapEngine {
    readonly name = "runtime";
    boot(): void;
}

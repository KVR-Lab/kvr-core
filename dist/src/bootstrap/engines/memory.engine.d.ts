import { BootstrapEngine } from "./engine.interface";
export declare class MemoryEngine implements BootstrapEngine {
    readonly name = "Memory";
    boot(): void;
}

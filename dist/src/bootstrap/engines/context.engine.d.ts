import { BootstrapEngine } from "./engine.interface";
export declare class ContextEngine implements BootstrapEngine {
    readonly name = "context";
    boot(): void;
}

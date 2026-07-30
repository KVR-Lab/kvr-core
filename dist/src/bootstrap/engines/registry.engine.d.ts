import { BootstrapEngine } from "./engine.interface";
export declare class RegistryEngine implements BootstrapEngine {
    readonly name = "registry";
    boot(): void;
}

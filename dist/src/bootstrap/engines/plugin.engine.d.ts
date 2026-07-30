import { BootstrapEngine } from "./engine.interface";
export declare class PluginEngine implements BootstrapEngine {
    readonly name = "plugin";
    boot(): void;
}

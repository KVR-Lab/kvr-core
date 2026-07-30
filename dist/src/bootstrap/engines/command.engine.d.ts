import { BootstrapEngine } from "./engine.interface";
export declare class CommandEngine implements BootstrapEngine {
    readonly name = "command";
    boot(): void;
}

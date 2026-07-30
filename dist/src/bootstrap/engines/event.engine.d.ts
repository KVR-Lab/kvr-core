import { BootstrapEngine } from "./engine.interface";
export declare class EventEngine implements BootstrapEngine {
    readonly name = "event";
    boot(): void;
}

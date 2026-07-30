import { BootstrapEngine } from "./engine.interface";
export declare class SchedulerEngine implements BootstrapEngine {
    readonly name = "scheduler";
    boot(): void;
}

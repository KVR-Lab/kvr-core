import { BootstrapEngine } from "./engine.interface";
export declare class ValidatorEngine implements BootstrapEngine {
    readonly name = "validator";
    boot(): void;
}

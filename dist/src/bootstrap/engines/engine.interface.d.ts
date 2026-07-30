export interface BootstrapEngine {
    readonly name: string;
    boot(): Promise<void> | void;
}

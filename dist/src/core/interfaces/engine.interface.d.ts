export interface KvrEngine {
    readonly name: string;
    boot(): Promise<void> | void;
}

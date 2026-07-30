export interface KVRModule {
    name: string;
    dependencies?: string[];
    onLoad?(): Promise<void>;
    onStart?(): Promise<void>;
    onStop?(): Promise<void>;
}
export declare class KernelEngineService {
    private readonly logger;
    private readonly modules;
    register(module: KVRModule): void;
    boot(): Promise<void>;
    shutdown(): Promise<void>;
    getModules(): string[];
}

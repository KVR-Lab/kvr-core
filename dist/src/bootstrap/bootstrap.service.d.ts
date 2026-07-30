export declare class BootstrapService {
    private readonly logger;
    private readonly loader;
    boot(): {
        status: string;
        engines: string[];
        modules: string[];
        controllers: string[];
        services: string[];
        statistics: {
            engines: number;
            modules: number;
            controllers: number;
            services: number;
        };
        bootedAt: string;
    };
    private scan;
}

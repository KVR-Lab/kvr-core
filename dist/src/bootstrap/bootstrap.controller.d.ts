import { BootstrapService } from './bootstrap.service';
export declare class BootstrapController {
    private readonly bootstrapService;
    constructor(bootstrapService: BootstrapService);
    run(): {
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
}

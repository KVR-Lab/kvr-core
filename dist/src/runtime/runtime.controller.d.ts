import { RuntimeService } from './runtime.service';
export declare class RuntimeController {
    private readonly service;
    constructor(service: RuntimeService);
    status(): {
        running: boolean;
        service: string;
        startedAt: string;
    };
}

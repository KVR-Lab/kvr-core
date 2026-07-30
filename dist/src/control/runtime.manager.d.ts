import { RuntimeService } from '../runtime/runtime.service';
export declare class RuntimeManager {
    private readonly runtime;
    constructor(runtime: RuntimeService);
    start(): {
        success: boolean;
        runtime: {
            running: boolean;
            service: string;
            startedAt: string;
        };
    };
    status(): {
        success: boolean;
        state: string;
        runtime: {
            running: boolean;
            service: string;
            startedAt: string;
        };
        timestamp: string;
    };
    health(): {
        ok: boolean;
        runtime: {
            running: boolean;
            service: string;
            startedAt: string;
        };
    };
}

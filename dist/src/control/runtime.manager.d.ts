import { RuntimeService } from '../runtime/runtime.service';
export declare class RuntimeManager {
    private readonly runtime;
    constructor(runtime: RuntimeService);
    start(): {
        success: boolean;
        runtime: import("../runtime").RuntimeSnapshot;
    };
    status(): {
        success: boolean;
        state: "WAITING" | "RUNNING" | "PAUSED" | "COMPLETED" | "FAILED" | "CANCELLED";
        runtime: import("../runtime").RuntimeSnapshot;
        timestamp: string;
    };
    health(): {
        ok: boolean;
        runtime: import("../runtime").RuntimeSnapshot;
    };
}

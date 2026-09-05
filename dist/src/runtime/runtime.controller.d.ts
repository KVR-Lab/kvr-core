import { RuntimeService } from './runtime.service';
export declare class RuntimeController {
    private readonly service;
    constructor(service: RuntimeService);
    status(): import("./runtime-state").RuntimeSnapshot;
    operations(): import("./runtime-state").RuntimeOperation[];
    operation(id: string): import("./runtime-state").RuntimeOperation | null;
    pause(): import("./runtime-state").RuntimeSnapshot;
    resume(): import("./runtime-state").RuntimeSnapshot;
    cancelCurrent(): import("./runtime-state").RuntimeOperation | null;
    cancel(id: string): import("./runtime-state").RuntimeOperation | null;
}

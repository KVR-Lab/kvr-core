import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { RuntimeLoop } from "./runtime.loop";
import { RuntimeStateManager } from "./runtime-state.manager";
export declare class RuntimeService implements OnModuleInit, OnModuleDestroy {
    private readonly loop;
    private readonly state;
    constructor(loop: RuntimeLoop, state: RuntimeStateManager);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    status(): import("./runtime-state").RuntimeSnapshot;
    operations(): import("./runtime-state").RuntimeOperation[];
    operation(id: string): import("./runtime-state").RuntimeOperation | null;
    pause(): import("./runtime-state").RuntimeSnapshot;
    resume(): import("./runtime-state").RuntimeSnapshot;
    cancel(id?: string): import("./runtime-state").RuntimeOperation | null;
}

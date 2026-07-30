import { OnModuleInit } from "@nestjs/common";
import { RuntimeLoop } from "./runtime.loop";
export declare class RuntimeService implements OnModuleInit {
    private readonly loop;
    constructor(loop: RuntimeLoop);
    onModuleInit(): Promise<void>;
    status(): {
        running: boolean;
        service: string;
        startedAt: string;
    };
}

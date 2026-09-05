import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { RuntimeLoop } from "./runtime.loop";
import { RuntimeStateManager } from "./runtime-state.manager";

@Injectable()
export class RuntimeService implements OnModuleInit, OnModuleDestroy {

    constructor(
        private readonly loop: RuntimeLoop,
        private readonly state: RuntimeStateManager
    ){}

    async onModuleInit() {
        this.loop.start();
    }

    onModuleDestroy() {
        this.loop.stop();
    }

    status() {
        return this.state.snapshot();
    }

    operations() {
        return this.state.list();
    }

    operation(id: string) {
        return this.state.get(id) ?? null;
    }

    pause() {
        return this.state.pauseRuntime();
    }

    resume() {
        return this.state.resumeRuntime();
    }

    cancel(id?: string) {
        if (id) {
            if (!this.state.get(id)) {
                return null;
            }

            return this.state.cancel(id);
        }

        return this.state.cancelCurrent();
    }

}

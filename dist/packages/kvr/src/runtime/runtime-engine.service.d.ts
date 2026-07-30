import { RuntimeContext } from "./runtime.context";
import { RuntimeSession } from "./runtime.session";
import { RuntimeState } from "./runtime.state";
import { RuntimeRegistry } from "./runtime.registry";
export declare class RuntimeEngineService {
    private readonly registry;
    private readonly executor;
    private readonly pipeline;
    private state;
    boot(context: RuntimeContext): RuntimeSession;
    execute(task: () => void): void;
    pipelineRun(): void;
    getState(): RuntimeState;
    stop(): void;
    registryInstance(): RuntimeRegistry;
}

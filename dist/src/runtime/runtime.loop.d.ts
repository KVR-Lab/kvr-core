import { PlannerService } from "../planner";
import { ExecutorService } from "../executor";
import { OrchestratorService } from "../orchestrator/orchestrator.service";
import { RuntimeStateManager } from "./runtime-state.manager";
export declare class RuntimeLoop {
    private readonly planner;
    private readonly orchestrator;
    private readonly executor;
    private readonly state;
    private running;
    private starting;
    constructor(planner: PlannerService, orchestrator: OrchestratorService, executor: ExecutorService, state: RuntimeStateManager);
    isRunning(): boolean;
    start(): Promise<void>;
    stop(): void;
    tick(): Promise<import("./runtime-state").RuntimeOperation | null | undefined>;
    processPlan(plan: any): Promise<import("./runtime-state").RuntimeOperation | undefined>;
}

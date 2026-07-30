import { PlannerService } from "../planner";
import { ExecutorService } from "../executor";
import { OrchestratorService } from "../orchestrator/orchestrator.service";
export declare class RuntimeLoop {
    private readonly planner;
    private readonly orchestrator;
    private readonly executor;
    private running;
    constructor(planner: PlannerService, orchestrator: OrchestratorService, executor: ExecutorService);
    start(): Promise<void>;
    stop(): void;
}

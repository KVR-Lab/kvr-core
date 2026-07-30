import { ProjectSpecService } from "../build/project-spec.service";
import { PlannerService } from "../planner";
import { BrainService } from "../brain";
import { ExecutorService } from "../executor";
export declare class ProjectRunner {
    private readonly spec;
    private readonly planner;
    private readonly brain;
    private readonly executor;
    constructor(spec: ProjectSpecService, planner: PlannerService, brain: BrainService, executor: ExecutorService);
    run(file: string): Promise<{
        success: boolean;
        executed: number;
        results: any[];
        plan: any;
    } | null>;
}

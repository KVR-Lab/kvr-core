import { ExecutorService } from "../executor/executor.service";
export declare class AgentLoop {
    private readonly executor;
    constructor(executor: ExecutorService);
    run(plan: any): Promise<any[]>;
}

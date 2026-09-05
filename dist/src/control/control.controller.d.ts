import { CommandCenter } from './command.center';
import { AgentManager } from './agent.manager';
import { RuntimeManager } from './runtime.manager';
export declare class ControlController {
    private readonly center;
    private readonly agent;
    private readonly runtime;
    constructor(center: CommandCenter, agent: AgentManager, runtime: RuntimeManager);
    status(): {
        system: {
            system: string;
            target: string;
            status: string;
            workspace: string;
            timestamp: string;
        };
        agent: {
            agent: string;
            mode: string;
        };
        runtime: {
            success: boolean;
            state: "WAITING" | "RUNNING" | "PAUSED" | "COMPLETED" | "FAILED" | "CANCELLED";
            runtime: import("../runtime").RuntimeSnapshot;
            timestamp: string;
        };
    };
}

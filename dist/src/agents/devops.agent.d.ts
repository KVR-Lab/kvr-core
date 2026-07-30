import { Agent } from "../contracts/agent.contract";
import { Task } from "../contracts/task.contract";
export declare class DevopsAgent implements Agent {
    name: string;
    canHandle(task: Task): boolean;
    execute(task: Task): Promise<{
        agent: string;
        status: string;
        task: Task;
    }>;
}

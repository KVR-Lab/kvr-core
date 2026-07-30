import { Task } from "./task.contract";
export interface Agent {
    name: string;
    canHandle(task: Task): boolean;
    execute(task: Task): Promise<any>;
}

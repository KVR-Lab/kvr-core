import { Task } from "../contracts/task.contract";
export declare class TaskQueue {
    private readonly queue;
    enqueue(task: Task): void;
    dequeue(): Task | undefined;
    all(): Task[];
    size(): number;
}

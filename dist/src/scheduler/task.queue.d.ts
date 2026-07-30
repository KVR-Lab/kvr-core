export declare class TaskQueue {
    private tasks;
    push(task: any): void;
    next(): any;
    all(): any[];
}

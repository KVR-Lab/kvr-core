export interface BrainTask {
    id: string;
    title: string;
    completed: boolean;
}
export declare class BrainPlanner {
    private readonly tasks;
    add(task: BrainTask): void;
    complete(id: string): void;
    pending(): BrainTask[];
    all(): BrainTask[];
}

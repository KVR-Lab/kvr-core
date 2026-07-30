export interface RuntimeState {
    status: "idle" | "running" | "paused" | "stopped";
    currentTask?: string;
    progress?: number;
    updatedAt?: Date;
}

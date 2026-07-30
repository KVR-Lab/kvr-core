export interface BrainContext {
    project: string;
    goal: string;
    task: string;
    user: string;
    sessionId: string;
    timestamp: Date;
    metadata?: Record<string, unknown>;
}

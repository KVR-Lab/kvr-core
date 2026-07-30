export interface RuntimeContext {
    project: string;
    workspace: string;
    environment: string;
    user: string;
    sessionId: string;
    version: string;
    startedAt: Date;
}

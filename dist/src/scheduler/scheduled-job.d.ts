export type ScheduledJobStatus = 'queued' | 'running' | 'done' | 'failed' | 'cancelled';
export interface ScheduledJob {
    id: string;
    command?: unknown;
    plan?: unknown;
    priority: number;
    runAt: number;
    attempts: number;
    maxAttempts: number;
    retryDelayMs: number;
    dependsOn: string[];
    concurrencyKey?: string;
    status: ScheduledJobStatus;
    error: string | null;
    createdAt: string;
    updatedAt: string;
}
export interface EnqueueJobInput {
    id?: string;
    command?: unknown;
    plan?: unknown;
    priority?: number;
    delayMs?: number;
    runAt?: number;
    maxAttempts?: number;
    retryDelayMs?: number;
    dependsOn?: string[];
    concurrencyKey?: string;
}

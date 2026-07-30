import { ArchitectAgent } from '../agents/architect.agent';
import { BackendAgent } from '../agents/backend.agent';
import { FrontendAgent } from '../agents/frontend.agent';
import { DatabaseAgent } from '../agents/database.agent';
import { DevopsAgent } from '../agents/devops.agent';
import { AiAgent } from '../agents/ai.agent';
import { Task } from '../contracts/task.contract';
export declare class OrchestratorService {
    private readonly architect;
    private readonly backend;
    private readonly frontend;
    private readonly database;
    private readonly devops;
    private readonly ai;
    constructor(architect: ArchitectAgent, backend: BackendAgent, frontend: FrontendAgent, database: DatabaseAgent, devops: DevopsAgent, ai: AiAgent);
    private get agents();
    start(): Promise<{
        status: string;
        agents: number;
    }>;
    dispatch(task: Task): Promise<{
        agent: string;
        status: string;
        task: Task;
    } | {
        status: string;
        task: Task;
    }>;
}

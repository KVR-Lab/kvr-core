import { BuildService } from '../build/build.service';
export declare class ExecutorService {
    private readonly build;
    constructor(build: BuildService);
    status(): {
        service: string;
        ready: boolean;
    };
    execute(plan: any): Promise<{
        success: boolean;
        executed: number;
        results: any[];
        plan: any;
    } | null>;
}

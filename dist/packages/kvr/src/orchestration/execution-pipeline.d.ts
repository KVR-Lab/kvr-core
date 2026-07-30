export declare class ExecutionPipeline {
    run(task: any): Promise<{
        executed: boolean;
        task: any;
    }>;
}

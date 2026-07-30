export declare class ProjectRunner {
    private readonly loader;
    private readonly generator;
    run(file: string): {
        status: string;
        output: any;
    };
}

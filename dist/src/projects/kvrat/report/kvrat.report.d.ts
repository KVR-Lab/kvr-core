export declare class KvratReport {
    private readonly root;
    generate(): {
        project: string;
        root: string;
        progress: string;
        apps: string[];
        completed: string[];
        missing: string[];
        checks: {
            backend: boolean;
            landing: boolean;
            web: boolean;
            mobile: boolean;
            packages: boolean;
            docker: boolean;
            workspace: boolean;
            env: boolean;
            readme: boolean;
            git: boolean;
        };
        generatedAt: string;
    };
}

export declare class KvratAdapter {
    private workspace;
    status(): {
        exists: boolean;
        root: string;
    };
    run(command: string): string;
}

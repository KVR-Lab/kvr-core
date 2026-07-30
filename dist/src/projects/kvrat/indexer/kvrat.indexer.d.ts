export declare class KvratIndexer {
    readonly root = "D:\\KVRAT.ai";
    scan(dir?: string): {
        project: string;
        root: string;
        files: number;
        directories: number;
        sourceFiles: number;
        apps: string[];
        packages: string[];
        lastIndexed: string;
    };
}

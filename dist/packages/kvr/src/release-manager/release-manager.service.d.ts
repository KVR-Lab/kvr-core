export declare class ReleaseManagerService {
    private version;
    release(): {
        name: string;
        status: string;
        capabilities: string[];
        timestamp: Date;
    };
    versionInfo(): {
        version: string;
    };
}

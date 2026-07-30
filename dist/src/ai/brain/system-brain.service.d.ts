export declare class SystemBrainService {
    constructor();
    process(input: string): Promise<{
        ok: boolean;
        input: string;
        blueprint: {
            type: string;
            modules: string[];
            database: string[];
            api: string[];
            roadmap: string[];
        };
        generated: boolean;
        timestamp: string;
    }>;
    private generateSystemBlueprint;
}

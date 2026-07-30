export declare class DocumentationEngine {
    private readonly root;
    constructor(root: string);
    generate(): {
        success: boolean;
        output: string;
        generated: string[];
    };
}

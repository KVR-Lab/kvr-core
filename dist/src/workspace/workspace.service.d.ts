export declare class WorkspaceService {
    private readonly root;
    status(): {
        workspace: string;
    };
    ensure(): void;
    findAll(): {
        name: string;
        type: string;
    }[];
    write(relative: string, content: string): Promise<string>;
}

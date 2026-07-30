export declare class BuildService {
    status(): {
        service: string;
        ready: boolean;
        workspace: string;
    };
    write(file: string, content: string): Promise<string>;
}

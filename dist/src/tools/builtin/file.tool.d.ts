export declare class FileTool {
    read(file: string): string;
    write(file: string, content: string): {
        success: boolean;
        file: string;
    };
    append(file: string, content: string): {
        success: boolean;
        file: string;
    };
    exists(file: string): boolean;
    mkdir(dir: string): {
        success: boolean;
        dir: string;
    };
    delete(file: string): {
        success: boolean;
        file: string;
    };
    list(dir: string): string[];
}

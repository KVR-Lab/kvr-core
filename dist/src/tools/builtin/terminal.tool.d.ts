export declare class TerminalTool {
    run(command: string): {
        success: boolean;
        command: string;
        output: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        error: any;
        output: any;
    };
}

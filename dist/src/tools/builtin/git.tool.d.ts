export declare class GitTool {
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
    status(): {
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
    branch(): {
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
    log(): {
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

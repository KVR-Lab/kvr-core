export declare class CommandService {
    private readonly workspace;
    execute(command: string): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    build(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    dev(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    install(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    start(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    lint(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    test(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    gitStatus(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    gitPull(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    gitFetch(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    gitLog(): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
    powershell(command: string): {
        success: boolean;
        command: string;
        output: string;
        timestamp: string;
        error?: undefined;
    } | {
        success: boolean;
        command: string;
        output: any;
        error: any;
        timestamp: string;
    };
}

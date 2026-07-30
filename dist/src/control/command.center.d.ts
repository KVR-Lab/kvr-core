import { CommandService } from '../command/command.service';
export declare class CommandCenter {
    private readonly commands;
    constructor(commands: CommandService);
    overview(): {
        system: string;
        target: string;
        status: string;
        workspace: string;
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
    shell(command: string): {
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

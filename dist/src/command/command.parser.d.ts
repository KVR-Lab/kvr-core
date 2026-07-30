export declare class CommandParser {
    parse(message: string): {
        original: string;
        command: string;
        createdAt: Date;
    };
}

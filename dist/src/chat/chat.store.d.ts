export declare class ChatStore {
    private sessions;
    add(sessionId: string, message: string): void;
    get(sessionId: string): string[];
}

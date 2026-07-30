export interface ChatMessageEvent {
    type: string;
    sessionId: string;
    message: string;
    createdAt: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'kvr';
    content: string;
    createdAt: Date;
}

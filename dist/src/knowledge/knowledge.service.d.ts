import { OnModuleInit } from '@nestjs/common';
export interface KnowledgeDocument {
    name: string;
    path: string;
    content: string;
}
export declare class KnowledgeService implements OnModuleInit {
    private readonly docsPath;
    private documents;
    onModuleInit(): void;
    getAll(): KnowledgeDocument[];
    reload(): void;
    search(query: string): KnowledgeDocument[];
    private scan;
}

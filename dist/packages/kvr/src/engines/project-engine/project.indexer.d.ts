import { ProjectScanner } from "./project.scanner";
export interface IndexedFile {
    name: string;
    path: string;
    extension: string;
    category: string;
}
export interface ProjectIndex {
    modules: IndexedFile[];
    controllers: IndexedFile[];
    services: IndexedFile[];
    entities: IndexedFile[];
    dto: IndexedFile[];
    interfaces: IndexedFile[];
    events: IndexedFile[];
    configs: IndexedFile[];
    tests: IndexedFile[];
    others: IndexedFile[];
}
export declare class ProjectIndexer {
    private readonly scanner;
    constructor(scanner?: ProjectScanner);
    build(root: string): ProjectIndex;
    private detect;
}

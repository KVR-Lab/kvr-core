export interface ProjectFile {
    name: string;
    path: string;
    extension: string;
    size: number;
}
export interface ProjectDirectory {
    name: string;
    path: string;
}
export interface ScanResult {
    root: string;
    files: ProjectFile[];
    directories: ProjectDirectory[];
}
export declare class ProjectScanner {
    scan(root: string): ScanResult;
    private walk;
}

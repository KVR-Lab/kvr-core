export interface SecretFinding {
    path: string;
    type: string;
    risk: string;
}
export declare class SecretScanner {
    private readonly patterns;
    private readonly excluded;
    scan(root: string): SecretFinding[];
    private walk;
    private isExcluded;
}

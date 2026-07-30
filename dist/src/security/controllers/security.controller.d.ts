import { SecretScanner } from '../scanner/secret.scanner';
export declare class SecurityController {
    private readonly scanner;
    constructor(scanner: SecretScanner);
    scan(): {
        system: string;
        scan: string;
        found: import("../scanner/secret.scanner").SecretFinding[];
    };
}

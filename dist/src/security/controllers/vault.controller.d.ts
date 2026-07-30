import { VaultService } from '../vault/vault.service';
export declare class VaultController {
    private readonly vault;
    constructor(vault: VaultService);
    importSecret(body: {
        source: string;
        name: string;
    }): {
        source: string;
        target: string;
        status: string;
    };
}

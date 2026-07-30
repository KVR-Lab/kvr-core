export declare class VaultService {
    private vaultPath;
    private registryPath;
    private key;
    status(): {
        system: string;
        vault: string;
        status: string;
    };
    encryptFile(source: string, name: string): {
        source: string;
        target: string;
        status: string;
    };
    private updateRegistry;
}

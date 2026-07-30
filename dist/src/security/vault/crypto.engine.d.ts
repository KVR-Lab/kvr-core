export declare class CryptoEngine {
    static algorithm: string;
    static encrypt(data: string, key: Buffer): {
        iv: string;
        tag: string;
        data: string;
    };
}

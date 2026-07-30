export declare class IdentityService {
    private findKvrKey;
    loadIdentity(): {
        status: string;
        message: string;
        source?: undefined;
        identity?: undefined;
    } | {
        status: string;
        source: string;
        identity: any;
        message?: undefined;
    };
}

export declare class IdentityService {
    private readonly keyPath;
    loadIdentity(): {
        status: string;
        message: string;
        identity?: undefined;
    } | {
        status: string;
        identity: any;
        message?: undefined;
    };
}

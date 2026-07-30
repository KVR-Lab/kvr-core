import { IdentityService } from '../identity.service';
export declare class IdentityController {
    private readonly identityService;
    constructor(identityService: IdentityService);
    status(): {
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

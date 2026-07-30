import { KvratService } from "./kvrat.service";
export declare class KvratController {
    private readonly service;
    constructor(service: KvratService);
    status(): {
        exists: boolean;
        root: string;
    };
    docs(): {
        success: boolean;
        file: string;
    };
    writeDocs(): {
        success: boolean;
        file: string;
    };
}

import { SampleModuleService } from './sample-module.service';
export declare class SampleModuleController {
    private readonly service;
    constructor(service: SampleModuleService);
    health(): {
        module: string;
        status: string;
    };
}

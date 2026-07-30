import { BuildService } from './build.service';
export declare class BuildController {
    private readonly service;
    constructor(service: BuildService);
    status(): {
        service: string;
        ready: boolean;
        workspace: string;
    };
}

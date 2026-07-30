import { VisionService } from './vision.service';
export declare class VisionController {
    private readonly service;
    constructor(service: VisionService);
    status(): {
        module: string;
        status: string;
        time: Date;
    };
}

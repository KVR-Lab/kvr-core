import { ControlCenterService } from './control-center.service';
export declare class ControlCenterController {
    private readonly controlCenterService;
    constructor(controlCenterService: ControlCenterService);
    getStatus(): {
        system: {
            name: string;
            status: string;
        };
        runtime: {
            loop: string;
            planner: string;
            executor: string;
        };
        projects: {
            id: string;
            name: string;
            path: string;
            status: string;
        }[];
        agents: {
            name: string;
            status: string;
        }[];
    };
}

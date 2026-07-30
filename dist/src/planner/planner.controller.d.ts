import { PlannerService } from './planner.service';
export declare class PlannerController {
    private readonly planner;
    constructor(planner: PlannerService);
    status(): {
        queue: number;
    };
    plan(body: any): {
        id: string;
        command: any;
        status: string;
        currentStep: number;
        steps: {
            id: string;
            action: string;
            status: string;
        }[];
        createdAt: Date;
    };
}

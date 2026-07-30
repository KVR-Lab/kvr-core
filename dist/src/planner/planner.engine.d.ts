import { PlannerService } from './planner.service';
export declare class PlannerEngine {
    private readonly planner;
    constructor(planner: PlannerService);
    build(command: any): {
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

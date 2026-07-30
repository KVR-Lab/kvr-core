export declare class PlannerService {
    private readonly queue;
    next(): Promise<any>;
    plan(command: any): {
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
    createPlan(command: any): {
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
    clear(): void;
    size(): number;
}

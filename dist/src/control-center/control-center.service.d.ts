export declare class ControlCenterService {
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

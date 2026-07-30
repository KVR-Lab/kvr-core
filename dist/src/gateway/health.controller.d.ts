export declare class HealthController {
    check(): {
        status: string;
        service: string;
        agent: boolean;
        memory: boolean;
        runtime: boolean;
        time: Date;
    };
}

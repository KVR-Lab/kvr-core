import { OnModuleInit } from '@nestjs/common';
export declare class AutonomousRuntimeService implements OnModuleInit {
    private status;
    onModuleInit(): void;
    boot(): void;
    getStatus(): {
        runtime: string;
        status: string;
        timestamp: Date;
    };
}

import { CommandCenter } from '../control/command.center';
export declare class GatewayController {
    private readonly center;
    constructor(center: CommandCenter);
    info(): {
        system: string;
        target: string;
        status: string;
        workspace: string;
        timestamp: string;
    };
}

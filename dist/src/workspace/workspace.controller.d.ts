import { WorkspaceService } from './workspace.service';
export declare class WorkspaceController {
    private readonly workspaceService;
    constructor(workspaceService: WorkspaceService);
    findAll(): {
        name: string;
        type: string;
    }[];
}

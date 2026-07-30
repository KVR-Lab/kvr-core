import { ProjectRegistryService } from '../registry/project-registry.service';
export declare class ProjectRuntimeService {
    private readonly registry;
    constructor(registry: ProjectRegistryService);
    status(): {
        name: any;
        path: any;
        registered: boolean;
        exists: boolean;
        packageJson: boolean;
        status: string;
    }[];
}

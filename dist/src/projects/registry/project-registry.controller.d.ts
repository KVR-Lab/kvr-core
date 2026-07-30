import { ProjectRegistryService } from './project-registry.service';
export declare class ProjectRegistryController {
    private readonly registry;
    constructor(registry: ProjectRegistryService);
    list(): any[];
}

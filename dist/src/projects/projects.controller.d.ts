import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        path: string;
        status: string;
        createdAt: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateProjectDto: UpdateProjectDto): any;
    remove(id: string): {
        deleted: boolean;
    };
}

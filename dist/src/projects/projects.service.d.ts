import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private readonly filePath;
    constructor();
    private ensureStorage;
    private readProjects;
    private saveProjects;
    create(dto: CreateProjectDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        path: string;
        status: string;
        createdAt: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, dto: UpdateProjectDto): any;
    remove(id: string): {
        deleted: boolean;
    };
}

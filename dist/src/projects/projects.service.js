"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const crypto_1 = require("crypto");
let ProjectsService = class ProjectsService {
    filePath = path.join(process.cwd(), 'data', 'projects', 'projects.json');
    constructor() {
        this.ensureStorage();
    }
    ensureStorage() {
        fs.ensureFileSync(this.filePath);
        const content = fs.readFileSync(this.filePath, 'utf8').trim();
        if (!content) {
            fs.writeJsonSync(this.filePath, [], { spaces: 2 });
        }
    }
    readProjects() {
        return fs.readJsonSync(this.filePath);
    }
    saveProjects(projects) {
        fs.writeJsonSync(this.filePath, projects, { spaces: 2 });
    }
    create(dto) {
        const projects = this.readProjects();
        const project = {
            id: (0, crypto_1.randomUUID)(),
            name: dto.name,
            path: dto.path,
            status: 'registered',
            createdAt: new Date().toISOString(),
        };
        projects.push(project);
        this.saveProjects(projects);
        return project;
    }
    findAll() {
        return this.readProjects();
    }
    findOne(id) {
        return this.readProjects().find((p) => p.id === id);
    }
    update(id, dto) {
        const projects = this.readProjects();
        const index = projects.findIndex((p) => p.id === id);
        if (index === -1) {
            return null;
        }
        projects[index] = {
            ...projects[index],
            ...dto,
        };
        this.saveProjects(projects);
        return projects[index];
    }
    remove(id) {
        const projects = this.readProjects();
        const filtered = projects.filter((p) => p.id !== id);
        this.saveProjects(filtered);
        return {
            deleted: true,
        };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map
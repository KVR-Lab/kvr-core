"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRunner = void 0;
const common_1 = require("@nestjs/common");
const project_spec_service_1 = require("../build/project-spec.service");
const planner_1 = require("../planner");
const brain_1 = require("../brain");
const executor_1 = require("../executor");
let ProjectRunner = class ProjectRunner {
    spec;
    planner;
    brain;
    executor;
    constructor(spec, planner, brain, executor) {
        this.spec = spec;
        this.planner = planner;
        this.brain = brain;
        this.executor = executor;
    }
    async run(file) {
        const project = this.spec.load(file);
        const plan = this.planner.plan(project);
        const decision = await this.brain.think(plan);
        return await this.executor.execute(decision);
    }
};
exports.ProjectRunner = ProjectRunner;
exports.ProjectRunner = ProjectRunner = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_spec_service_1.ProjectSpecService,
        planner_1.PlannerService,
        brain_1.BrainService,
        executor_1.ExecutorService])
], ProjectRunner);
//# sourceMappingURL=project.runner.js.map
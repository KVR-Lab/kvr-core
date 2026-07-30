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
exports.RuntimeLoop = void 0;
const common_1 = require("@nestjs/common");
const planner_1 = require("../planner");
const executor_1 = require("../executor");
const orchestrator_service_1 = require("../orchestrator/orchestrator.service");
let RuntimeLoop = class RuntimeLoop {
    planner;
    orchestrator;
    executor;
    running = false;
    constructor(planner, orchestrator, executor) {
        this.planner = planner;
        this.orchestrator = orchestrator;
        this.executor = executor;
    }
    async start() {
        this.running = true;
        while (this.running) {
            const plan = await this.planner.next();
            if (plan) {
                const task = {
                    id: Date.now().toString(),
                    type: "project",
                    payload: plan
                };
                const result = await this.orchestrator.dispatch(task);
                await this.executor.execute(result);
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    stop() {
        this.running = false;
    }
};
exports.RuntimeLoop = RuntimeLoop;
exports.RuntimeLoop = RuntimeLoop = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [planner_1.PlannerService,
        orchestrator_service_1.OrchestratorService,
        executor_1.ExecutorService])
], RuntimeLoop);
//# sourceMappingURL=runtime.loop.js.map
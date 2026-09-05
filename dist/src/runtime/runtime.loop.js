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
const runtime_state_manager_1 = require("./runtime-state.manager");
let RuntimeLoop = class RuntimeLoop {
    planner;
    orchestrator;
    executor;
    state;
    running = false;
    starting = false;
    constructor(planner, orchestrator, executor, state) {
        this.planner = planner;
        this.orchestrator = orchestrator;
        this.executor = executor;
        this.state = state;
    }
    isRunning() {
        return this.running;
    }
    async start() {
        if (this.running || this.starting) {
            return;
        }
        this.starting = true;
        this.running = true;
        this.state.markLoopStarted();
        this.starting = false;
        while (this.running) {
            try {
                await this.tick();
            }
            catch {
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    stop() {
        this.running = false;
    }
    async tick() {
        if (!this.running || this.state.isPaused()) {
            return null;
        }
        const plan = await this.planner.next();
        if (!plan) {
            return null;
        }
        return this.processPlan(plan);
    }
    async processPlan(plan) {
        const operation = this.state.create({
            source: "runtime.loop",
            planId: plan?.id,
        });
        try {
            this.state.start(operation.id);
            if (this.state.get(operation.id)?.status === "CANCELLED") {
                return this.state.get(operation.id);
            }
            const task = {
                id: plan?.id ?? operation.id,
                type: "project",
                payload: plan
            };
            const dispatch = await this.orchestrator.dispatch(task);
            if (this.state.get(operation.id)?.status === "CANCELLED") {
                return this.state.get(operation.id);
            }
            const executed = await this.executor.execute(plan);
            return this.state.complete(operation.id, {
                dispatch,
                executed,
            });
        }
        catch (error) {
            const current = this.state.get(operation.id);
            if (current && this.state.isTerminal(current.status)) {
                return current;
            }
            return this.state.fail(operation.id, error);
        }
    }
};
exports.RuntimeLoop = RuntimeLoop;
exports.RuntimeLoop = RuntimeLoop = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [planner_1.PlannerService,
        orchestrator_service_1.OrchestratorService,
        executor_1.ExecutorService,
        runtime_state_manager_1.RuntimeStateManager])
], RuntimeLoop);
//# sourceMappingURL=runtime.loop.js.map
import { Injectable } from "@nestjs/common";

import { PlannerService } from "../planner";
import { ExecutorService } from "../executor";
import { OrchestratorService } from "../orchestrator/orchestrator.service";
import { Task } from "../contracts/task.contract";
import { RuntimeStateManager } from "./runtime-state.manager";

@Injectable()
export class RuntimeLoop {

    private running = false;
    private starting = false;

    constructor(
        private readonly planner: PlannerService,
        private readonly orchestrator: OrchestratorService,
        private readonly executor: ExecutorService,
        private readonly state: RuntimeStateManager
    ) {}

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
            } catch {
                // A single failed tick must not stop the runtime loop.
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

    async processPlan(plan: any) {

        const operation = this.state.create({
            source: "runtime.loop",
            planId: plan?.id,
        });

        try {

            this.state.start(operation.id);

            if (this.state.get(operation.id)?.status === "CANCELLED") {
                return this.state.get(operation.id);
            }

            const task: Task = {
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

        } catch (error) {

            const current = this.state.get(operation.id);

            if (current && this.state.isTerminal(current.status)) {
                return current;
            }

            return this.state.fail(operation.id, error);

        }

    }

}

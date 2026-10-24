import { Module } from "@nestjs/common";

import { RuntimeService } from "./runtime.service";
import { RuntimeLoop } from "./runtime.loop";
import { RuntimeController } from "./runtime.controller";
import { RuntimeStateManager } from "./runtime-state.manager";

import { EventBus } from "../events/bus/event.bus";

import { PlannerModule } from "../planner/planner.module";
import { ExecutorModule } from "../executor/executor.module";
import { MemoryModule } from "../memory/memory.module";
import { AiModule } from "../ai/ai.module";
import { BrainModule } from "../brain/brain.module";
import { OrchestratorModule } from "../orchestrator/orchestrator.module";
import { SchedulerModule } from "../scheduler/scheduler.module";

@Module({
    imports: [
        PlannerModule,
        ExecutorModule,
        MemoryModule,
        AiModule,
        BrainModule,
        OrchestratorModule,
        SchedulerModule
    ],
    controllers: [
        RuntimeController
    ],
    providers: [
        RuntimeService,
        RuntimeLoop,
        RuntimeStateManager,
        EventBus
    ],
    exports: [
        RuntimeService,
        RuntimeLoop,
        RuntimeStateManager
    ]
})
export class RuntimeModule {}
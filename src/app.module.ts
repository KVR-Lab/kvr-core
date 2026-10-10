import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SecurityModule } from './security/security.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectsModule } from './projects/projects.module';
import { KvratModule } from './projects/kvrat/kvrat.module';
import { ProjectRegistryModule } from './projects/registry/project-registry.module';
import { ProjectRuntimeModule } from './projects/runtime/project-runtime.module';

import { WorkspaceModule } from './workspace/workspace.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';

import { KnowledgeModule } from './knowledge/knowledge.module';

import { CommandModule } from './command/command.module';
import { PlannerModule } from './planner/planner.module';
import { ExecutorModule } from './executor/executor.module';
import { MemoryModule } from './memory/memory.module';
import { AiModule } from './ai/ai.module';
import { AgentModule } from './agent/agent.module';

import { SystemModule } from './system/system.module';
import { ControlModule } from './control/control.module';

import { GatewayModule } from './gateway/gateway.module';
import { StorageModule } from './storage/storage.module';

import { MonitorModule } from './monitor/monitor.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';

import { KvrKernelModule } from './kernel/kernel.module';
import { RuntimeModule } from './runtime/runtime.module';

import { ToolModule } from './tools/tool.module';

import { ControlPlaneModule } from './control-plane/control-plane.module';
import { ControlCenterModule } from './control-center/control-center.module';

@Module({
  imports: [
    // Environment Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),

    // Security
    SecurityModule,

    // Projects
    ProjectsModule,
    ProjectRegistryModule,
    ProjectRuntimeModule,
    KvratModule,

    // Workspace
    WorkspaceModule,
    BootstrapModule,

    // Knowledge
    KnowledgeModule,

    // AI
    CommandModule,
    PlannerModule,
    ExecutorModule,
    MemoryModule,
    AiModule,
    AgentModule,

    // Core
    SystemModule,
    KvrKernelModule,
    RuntimeModule,

    // Infrastructure
    GatewayModule,
    StorageModule,
    ToolModule,

    // Operations
    MonitorModule,
    SchedulerModule,
    OrchestratorModule,

    // Control
    ControlModule,
    ControlPlaneModule,
    ControlCenterModule,
  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}

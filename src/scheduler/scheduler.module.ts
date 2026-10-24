import { Module } from '@nestjs/common';

import { AgentModule } from '../agent/agent.module';

import { TaskQueue } from './task.queue';
import { SchedulerService } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';

@Module({
  imports: [
    AgentModule,
  ],
  controllers: [
    SchedulerController,
  ],
  providers: [
    TaskQueue,
    SchedulerService,
  ],
  exports: [
    SchedulerService,
    TaskQueue,
  ],
})
export class SchedulerModule {}

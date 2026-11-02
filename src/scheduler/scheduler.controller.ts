import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import type { EnqueueJobInput } from './scheduled-job';
import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly scheduler: SchedulerService) {}

  @Get()
  list() {
    return {
      jobs: this.scheduler.list(),
    };
  }

  @Get(':id')
  get(@Param('id') id: string) {
    const job = this.scheduler.get(id);

    if (!job) {
      throw new NotFoundException(`Unknown scheduled job: ${id}`);
    }

    return job;
  }

  @Post('enqueue')
  enqueue(@Body() body: EnqueueJobInput) {
    return this.scheduler.enqueue(body ?? {});
  }

  @Post('cancel/:id')
  cancel(@Param('id') id: string) {
    const job = this.scheduler.cancel(id);

    if (!job) {
      throw new NotFoundException(`Unknown scheduled job: ${id}`);
    }

    return job;
  }
}

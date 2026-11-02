import { Injectable } from '@nestjs/common';
import { BuildService } from '../build/build.service';

@Injectable()
export class ExecutorService {
  constructor(
    private readonly build: BuildService,
  ) {}

  status() {
    return {
      service: 'executor',
      ready: true,
    };
  }

  async execute(plan: any) {
    if (!plan) {
      return null;
    }

    const results: any[] = [];

    if (Array.isArray(plan.steps)) {
      for (const step of plan.steps) {
        switch (step.action) {
          case 'write':
            if (step.file) {
              await this.build.write(
                step.file,
                step.content ?? '',
              );
            }

            results.push({
              step: step.action,
              status: 'done',
            });
            break;

          case 'analyze':
            results.push({
              step: step.action,
              status: 'done',
              analysis: {
                planId: plan.id ?? null,
                command: plan.command ?? null,
                stepCount: plan.steps?.length ?? 0,
              },
            });
            break;

          case 'execute':
            results.push({
              step: step.action,
              status: 'done',
              executed: {
                planId: plan.id ?? null,
                action: step.action,
              },
            });
            break;

          default:
            results.push({
              step: step.action,
              status: 'skipped',
            });
        }
      }
    }

    return {
      success: true,
      executed: results.length,
      results,
      plan,
    };
  }
}
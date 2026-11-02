import { SchedulerService } from './scheduler.service';
import { TaskQueue } from './task.queue';

describe('SchedulerService', () => {
  let scheduler: SchedulerService;

  beforeEach(() => {
    scheduler = new SchedulerService(new TaskQueue());
  });

  it('keeps legacy interval scheduling', () => {
    const handle = scheduler.schedule({ interval: 10, run: () => undefined });
    expect(handle).toBeTruthy();
    clearInterval(handle as NodeJS.Timeout);
  });

  it('enqueues delayed jobs and respects priority', () => {
    scheduler.enqueue({ id: 'later', command: 'b', delayMs: 60_000, priority: 10 });
    scheduler.enqueue({ id: 'low', command: 'a', priority: 1 });
    scheduler.enqueue({ id: 'high', command: 'c', priority: 5 });

    expect(scheduler.dequeueReady()?.id).toBe('high');
    expect(scheduler.dequeueReady()).toBeNull();
  });

  it('blocks a job until its dependency is done', () => {
    scheduler.enqueue({ id: 'parent', command: 'first' });
    scheduler.enqueue({ id: 'child', command: 'second', dependsOn: ['parent'] });

    expect(scheduler.dequeueReady()?.id).toBe('parent');
    expect(scheduler.dequeueReady()).toBeNull();

    scheduler.markDone('parent');
    expect(scheduler.dequeueReady()?.id).toBe('child');
  });

  it('retries a failed job then marks it failed', () => {
    scheduler.enqueue({ id: 'retry-me', command: 'x', maxAttempts: 2, retryDelayMs: 0 });

    expect(scheduler.dequeueReady()?.id).toBe('retry-me');
    expect(scheduler.markFailed('retry-me', new Error('boom'))?.status).toBe('queued');
    expect(scheduler.dequeueReady()?.id).toBe('retry-me');
    expect(scheduler.markFailed('retry-me', new Error('boom'))?.status).toBe('failed');
  });

  it('cancels a queued job', () => {
    scheduler.enqueue({ id: 'drop', command: 'x' });
    expect(scheduler.cancel('drop')?.status).toBe('cancelled');
    expect(scheduler.dequeueReady()).toBeNull();
  });

  it('limits concurrent jobs by key', () => {
    scheduler.setMaxConcurrent(2);
    scheduler.enqueue({ id: 'a', command: 'a', concurrencyKey: 'same' });
    scheduler.enqueue({ id: 'b', command: 'b', concurrencyKey: 'same' });

    expect(scheduler.dequeueReady()?.id).toBe('a');
    expect(scheduler.dequeueReady()).toBeNull();

    scheduler.markDone('a');
    expect(scheduler.dequeueReady()?.id).toBe('b');
  });
});

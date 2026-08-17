import { MemoryService } from '../memory/memory.service';
import { EventBus } from '../events/bus/event.bus';
import { RuntimeStateManager } from './runtime-state.manager';

describe('RuntimeStateManager', () => {
  let manager: RuntimeStateManager;
  let memory: { store: jest.Mock };
  let events: EventBus;

  beforeEach(() => {
    memory = { store: jest.fn((item) => item) };
    events = new EventBus();
    manager = new RuntimeStateManager(
      memory as unknown as MemoryService,
      events,
    );
  });

  it('creates operations in WAITING with empty timing fields', () => {
    const operation = manager.create({ source: 'test', planId: 'plan-1' });

    expect(operation.status).toBe('WAITING');
    expect(operation.startedAt).toBeNull();
    expect(operation.finishedAt).toBeNull();
    expect(operation.duration).toBeNull();
    expect(operation.error).toBeNull();
    expect(operation.result).toBeNull();
    expect(operation.planId).toBe('plan-1');
  });

  it('records RUNNING metadata on start', () => {
    const created = manager.create();
    const started = manager.start(created.id);

    expect(started.status).toBe('RUNNING');
    expect(started.startedAt).toEqual(expect.any(String));
    expect(manager.current()?.id).toBe(created.id);
    expect(manager.snapshot().status).toBe('RUNNING');
  });

  it('completes with result, duration, and memory record', () => {
    const created = manager.create();
    manager.start(created.id);

    const completed = manager.complete(created.id, { ok: true });

    expect(completed.status).toBe('COMPLETED');
    expect(completed.result).toEqual({ ok: true });
    expect(completed.finishedAt).toEqual(expect.any(String));
    expect(completed.duration).toBeGreaterThanOrEqual(0);
    expect(manager.current()).toBeNull();
    expect(manager.snapshot().status).toBe('WAITING');
    expect(memory.store).toHaveBeenCalledWith(
      expect.objectContaining({
        kind: 'runtime.operation',
        id: created.id,
        status: 'COMPLETED',
      }),
    );
  });

  it('fails with error text and persists', () => {
    const created = manager.create();
    manager.start(created.id);

    const failed = manager.fail(created.id, new Error('step exploded'));

    expect(failed.status).toBe('FAILED');
    expect(failed.error).toBe('step exploded');
    expect(failed.finishedAt).toEqual(expect.any(String));
    expect(memory.store).toHaveBeenCalled();
  });

  it('pauses and resumes the runtime and current operation', () => {
    const created = manager.create();
    manager.start(created.id);

    const paused = manager.pauseRuntime();
    expect(paused.status).toBe('PAUSED');
    expect(paused.paused).toBe(true);
    expect(manager.get(created.id)?.status).toBe('PAUSED');

    const resumed = manager.resumeRuntime();
    expect(resumed.status).toBe('RUNNING');
    expect(manager.get(created.id)?.status).toBe('RUNNING');
  });

  it('cancels WAITING, RUNNING, and PAUSED operations', () => {
    const waiting = manager.create();
    expect(manager.cancel(waiting.id).status).toBe('CANCELLED');

    const running = manager.create();
    manager.start(running.id);
    expect(manager.cancel(running.id).status).toBe('CANCELLED');

    const paused = manager.create();
    manager.start(paused.id);
    manager.pause(paused.id);
    expect(manager.cancel(paused.id).status).toBe('CANCELLED');
  });

  it('rejects illegal transitions', () => {
    const created = manager.create();

    expect(() => manager.complete(created.id)).toThrow(/Invalid runtime transition/);

    manager.start(created.id);
    manager.complete(created.id, { done: true });

    expect(() => manager.start(created.id)).toThrow(/Invalid runtime transition/);
  });

  it('emits lifecycle events on the existing EventBus', () => {
    const created = manager.create();
    manager.start(created.id);
    manager.complete(created.id, { done: true });

    const names = events.getEvents().map((event) => event.name);
    expect(names).toEqual(
      expect.arrayContaining([
        'runtime.operation.created',
        'runtime.operation.started',
        'runtime.operation.completed',
      ]),
    );
  });
});

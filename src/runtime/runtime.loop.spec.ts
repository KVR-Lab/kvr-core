import { RuntimeLoop } from './runtime.loop';
import { RuntimeStateManager } from './runtime-state.manager';
import { MemoryService } from '../memory/memory.service';
import { EventBus } from '../events/bus/event.bus';

describe('RuntimeLoop', () => {
  let loop: RuntimeLoop;
  let planner: { next: jest.Mock; plan: jest.Mock };
  let orchestrator: { dispatch: jest.Mock };
  let executor: { execute: jest.Mock };
  let scheduler: {
    dequeueReady: jest.Mock;
    markDone: jest.Mock;
    markFailed: jest.Mock;
    cancel: jest.Mock;
  };
  let state: RuntimeStateManager;

  beforeEach(() => {
    planner = {
      next: jest.fn().mockResolvedValue(null),
      plan: jest.fn((command) => ({ id: 'from-command', command, steps: [] })),
    };
    orchestrator = {
      dispatch: jest.fn().mockResolvedValue({ status: 'no-agent' }),
    };
    executor = {
      execute: jest.fn().mockResolvedValue({ success: true, executed: 2 }),
    };
    scheduler = {
      dequeueReady: jest.fn().mockReturnValue(null),
      markDone: jest.fn(),
      markFailed: jest.fn(),
      cancel: jest.fn(),
    };
    state = new RuntimeStateManager(
      { store: jest.fn((item) => item) } as unknown as MemoryService,
      new EventBus(),
    );

    loop = new RuntimeLoop(
      planner as any,
      orchestrator as any,
      executor as any,
      state,
      scheduler as any,
    );
  });

  it('does not dequeue work while the runtime is paused', async () => {
    planner.next.mockResolvedValue({ id: 'plan-1', steps: [] });
    state.markLoopStarted();
    state.pauseRuntime();

    await loop.tick();

    expect(planner.next).not.toHaveBeenCalled();
    expect(scheduler.dequeueReady).not.toHaveBeenCalled();
  });

  it('records COMPLETED after dispatching and executing the plan', async () => {
    const plan = {
      id: 'plan-9',
      steps: [{ id: 'analyze', action: 'analyze' }],
    };

    const operation = await loop.processPlan(plan);

    expect(orchestrator.dispatch).toHaveBeenCalledWith({
      id: 'plan-9',
      type: 'project',
      payload: plan,
    });
    expect(executor.execute).toHaveBeenCalledWith(plan);
    expect(operation?.status).toBe('COMPLETED');
    expect(operation?.result).toEqual({
      dispatch: { status: 'no-agent' },
      executed: { success: true, executed: 2 },
    });
  });

  it('infers a specialist type from the plan command', async () => {
    await loop.processPlan({
      id: 'plan-api',
      command: 'build the backend API',
      steps: [],
    });

    expect(orchestrator.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'plan-api',
        type: 'backend',
      }),
    );
  });

  it('runs a scheduled job before the planner queue', async () => {
    state.markLoopStarted();
    scheduler.dequeueReady.mockReturnValue({
      id: 'job-1',
      command: 'ship backend',
    });

    await loop.tick();

    expect(planner.plan).toHaveBeenCalledWith('ship backend');
    expect(planner.next).not.toHaveBeenCalled();
    expect(scheduler.markDone).toHaveBeenCalledWith('job-1');
  });

  it('completes in-flight work after the runtime is paused', async () => {
    let release!: () => void;
    executor.execute.mockReturnValue(
      new Promise((resolve) => {
        release = () => resolve({ success: true, executed: 1 });
      }),
    );

    const pending = loop.processPlan({ id: 'plan-pause' });
    state.pauseRuntime();
    release();

    const operation = await pending;

    expect(operation?.status).toBe('COMPLETED');
    expect(state.snapshot().paused).toBe(true);
  });

  it('records FAILED when execution throws', async () => {
    executor.execute.mockRejectedValue(new Error('write failed'));

    const operation = await loop.processPlan({ id: 'plan-err' });

    expect(operation?.status).toBe('FAILED');
    expect(operation?.error).toBe('write failed');
  });
});

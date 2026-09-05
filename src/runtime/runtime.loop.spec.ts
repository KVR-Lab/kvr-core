import { RuntimeLoop } from './runtime.loop';
import { RuntimeStateManager } from './runtime-state.manager';
import { MemoryService } from '../memory/memory.service';
import { EventBus } from '../events/bus/event.bus';

describe('RuntimeLoop', () => {
  let loop: RuntimeLoop;
  let planner: { next: jest.Mock };
  let orchestrator: { dispatch: jest.Mock };
  let executor: { execute: jest.Mock };
  let state: RuntimeStateManager;

  beforeEach(() => {
    planner = { next: jest.fn().mockResolvedValue(null) };
    orchestrator = {
      dispatch: jest.fn().mockResolvedValue({ status: 'no-agent' }),
    };
    executor = {
      execute: jest.fn().mockResolvedValue({ success: true, executed: 2 }),
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
    );
  });

  it('does not dequeue work while the runtime is paused', async () => {
    planner.next.mockResolvedValue({ id: 'plan-1', steps: [] });
    state.markLoopStarted();
    state.pauseRuntime();

    await loop.tick();

    expect(planner.next).not.toHaveBeenCalled();
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

  it('records FAILED when execution throws', async () => {
    executor.execute.mockRejectedValue(new Error('write failed'));

    const operation = await loop.processPlan({ id: 'plan-err' });

    expect(operation?.status).toBe('FAILED');
    expect(operation?.error).toBe('write failed');
  });
});

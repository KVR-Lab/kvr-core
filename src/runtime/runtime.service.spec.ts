import { RuntimeService } from './runtime.service';
import { RuntimeLoop } from './runtime.loop';
import { RuntimeStateManager } from './runtime-state.manager';
import { MemoryService } from '../memory/memory.service';
import { EventBus } from '../events/bus/event.bus';

describe('RuntimeService', () => {
  let service: RuntimeService;
  let loop: { start: jest.Mock; stop: jest.Mock };
  let state: RuntimeStateManager;

  beforeEach(() => {
    loop = { start: jest.fn(), stop: jest.fn() };
    state = new RuntimeStateManager(
      { store: jest.fn((item) => item) } as unknown as MemoryService,
      new EventBus(),
    );
    service = new RuntimeService(loop as unknown as RuntimeLoop, state);
  });

  it('returns live snapshot instead of a hardcoded running flag', () => {
    state.markLoopStarted();

    const snapshot = service.status();

    expect(snapshot.service).toBe('runtime');
    expect(snapshot.status).toBe('WAITING');
    expect(snapshot.startedAt).toEqual(expect.any(String));
    expect(snapshot.running).toBe(true);
  });

  it('returns null instead of throwing when cancelling an unknown id', () => {
    expect(service.cancel('missing-id')).toBeNull();
  });

  it('starts the loop on init and stops it on destroy', async () => {
    await service.onModuleInit();
    service.onModuleDestroy();

    expect(loop.start).toHaveBeenCalledTimes(1);
    expect(loop.stop).toHaveBeenCalledTimes(1);
  });
});

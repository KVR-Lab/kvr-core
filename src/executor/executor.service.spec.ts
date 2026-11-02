import { ExecutorService } from './executor.service';

describe('ExecutorService', () => {
  it('records analyze output instead of an empty done marker', async () => {
    const executor = new ExecutorService({
      write: jest.fn(),
    } as any);

    const result = await executor.execute({
      id: 'plan-1',
      command: 'inspect shipping',
      steps: [{ action: 'analyze' }, { action: 'execute' }],
    });

    expect(result?.results[0]).toEqual({
      step: 'analyze',
      status: 'done',
      analysis: {
        planId: 'plan-1',
        command: 'inspect shipping',
        stepCount: 2,
      },
    });
    expect(result?.results[1].executed).toEqual({
      planId: 'plan-1',
      action: 'execute',
    });
  });
});

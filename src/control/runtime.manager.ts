import { Injectable } from '@nestjs/common';
import { RuntimeService } from '../runtime/runtime.service';

@Injectable()
export class RuntimeManager {
  constructor(
    private readonly runtime: RuntimeService,
  ) {}

  start() {
    return {
      success: true,
      runtime: this.runtime.status(),
    };
  }

  status() {
    const runtime = this.runtime.status();

    return {
      success: true,
      state: runtime.status,
      runtime,
      timestamp: new Date().toISOString(),
    };
  }

  health() {
    return {
      ok: true,
      runtime: this.runtime.status(),
    };
  }
}
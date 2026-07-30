import { RuntimeManager } from '../runtime/manager/runtime.manager';
import { RegistryService } from '../registry/registry.service';
import { EventBus } from '../events/bus/event.bus';
export declare const KVR_PROVIDERS: (typeof EventBus | typeof RegistryService | typeof RuntimeManager)[];

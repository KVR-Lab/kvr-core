"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KVR_PROVIDERS = void 0;
const runtime_manager_1 = require("../runtime/manager/runtime.manager");
const registry_service_1 = require("../registry/registry.service");
const event_bus_1 = require("../events/bus/event.bus");
exports.KVR_PROVIDERS = [
    runtime_manager_1.RuntimeManager,
    registry_service_1.RegistryService,
    event_bus_1.EventBus
];
//# sourceMappingURL=kernel.providers.js.map
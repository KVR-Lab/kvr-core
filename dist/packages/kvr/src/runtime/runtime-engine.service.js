"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeEngineService = void 0;
const common_1 = require("@nestjs/common");
const runtime_executor_1 = require("./runtime.executor");
const runtime_pipeline_1 = require("./runtime.pipeline");
const runtime_registry_1 = require("./runtime.registry");
let RuntimeEngineService = class RuntimeEngineService {
    registry = new runtime_registry_1.RuntimeRegistry();
    executor = new runtime_executor_1.RuntimeExecutor();
    pipeline = new runtime_pipeline_1.RuntimePipeline();
    state = {
        status: "idle"
    };
    boot(context) {
        this.state.status = "running";
        return {
            id: crypto.randomUUID(),
            context,
            startedAt: new Date(),
            lastActivity: new Date(),
            isActive: true
        };
    }
    execute(task) {
        this.executor.execute(task);
    }
    pipelineRun() {
        this.pipeline.run();
    }
    getState() {
        return this.state;
    }
    stop() {
        this.state.status = "stopped";
    }
    registryInstance() {
        return this.registry;
    }
};
exports.RuntimeEngineService = RuntimeEngineService;
exports.RuntimeEngineService = RuntimeEngineService = __decorate([
    (0, common_1.Injectable)()
], RuntimeEngineService);
//# sourceMappingURL=runtime-engine.service.js.map
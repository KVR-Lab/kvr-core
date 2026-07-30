"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineLoader = void 0;
const knowledge_engine_1 = require("./knowledge.engine");
const memory_engine_1 = require("./memory.engine");
const planner_engine_1 = require("./planner.engine");
const executor_engine_1 = require("./executor.engine");
const ai_engine_1 = require("./ai.engine");
const command_engine_1 = require("./command.engine");
const context_engine_1 = require("./context.engine");
const event_engine_1 = require("./event.engine");
const pipeline_engine_1 = require("./pipeline.engine");
const plugin_engine_1 = require("./plugin.engine");
const registry_engine_1 = require("./registry.engine");
const runtime_engine_1 = require("./runtime.engine");
const scheduler_engine_1 = require("./scheduler.engine");
const validator_engine_1 = require("./validator.engine");
const workflow_engine_1 = require("./workflow.engine");
class EngineLoader {
    engines = [
        new runtime_engine_1.RuntimeEngine(),
        new registry_engine_1.RegistryEngine(),
        new context_engine_1.ContextEngine(),
        new event_engine_1.EventEngine(),
        new pipeline_engine_1.PipelineEngine(),
        new plugin_engine_1.PluginEngine(),
        new scheduler_engine_1.SchedulerEngine(),
        new validator_engine_1.ValidatorEngine(),
        new workflow_engine_1.WorkflowEngine(),
        new command_engine_1.CommandEngine(),
        new knowledge_engine_1.KnowledgeEngine(),
        new memory_engine_1.MemoryEngine(),
        new planner_engine_1.PlannerEngine(),
        new executor_engine_1.ExecutorEngine(),
        new ai_engine_1.AiEngine(),
    ];
    boot() {
        this.engines.forEach(engine => {
            engine.boot();
        });
        return this.engines.map(engine => engine.name);
    }
}
exports.EngineLoader = EngineLoader;
//# sourceMappingURL=engine.loader.js.map
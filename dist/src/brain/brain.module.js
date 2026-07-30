"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainModule = void 0;
const common_1 = require("@nestjs/common");
const brain_service_1 = require("./brain.service");
const llm_module_1 = require("../llm/llm.module");
const memory_module_1 = require("../memory/memory.module");
const knowledge_module_1 = require("../knowledge/knowledge.module");
let BrainModule = class BrainModule {
};
exports.BrainModule = BrainModule;
exports.BrainModule = BrainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            llm_module_1.LlmModule,
            memory_module_1.MemoryModule,
            knowledge_module_1.KnowledgeModule
        ],
        providers: [
            brain_service_1.BrainService
        ],
        exports: [
            brain_service_1.BrainService
        ]
    })
], BrainModule);
//# sourceMappingURL=brain.module.js.map
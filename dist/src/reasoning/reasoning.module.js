"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasoningModule = void 0;
const common_1 = require("@nestjs/common");
const goal_manager_1 = require("./goal.manager");
const reasoning_engine_1 = require("./reasoning.engine");
const ai_module_1 = require("../ai/ai.module");
let ReasoningModule = class ReasoningModule {
};
exports.ReasoningModule = ReasoningModule;
exports.ReasoningModule = ReasoningModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ai_module_1.AiModule
        ],
        providers: [
            goal_manager_1.GoalManager,
            reasoning_engine_1.ReasoningEngine
        ],
        exports: [
            reasoning_engine_1.ReasoningEngine
        ]
    })
], ReasoningModule);
//# sourceMappingURL=reasoning.module.js.map
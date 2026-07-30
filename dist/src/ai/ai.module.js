"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiModule = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const ai_engine_1 = require("./ai.engine");
const brain_module_1 = require("./brain/brain.module");
const llm_module_1 = require("../llm/llm.module");
let AiModule = class AiModule {
};
exports.AiModule = AiModule;
exports.AiModule = AiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            brain_module_1.BrainModule,
            llm_module_1.LlmModule,
        ],
        providers: [
            ai_service_1.AiService,
            ai_engine_1.AiEngine,
        ],
        exports: [
            ai_service_1.AiService,
            ai_engine_1.AiEngine,
        ],
    })
], AiModule);
//# sourceMappingURL=ai.module.js.map
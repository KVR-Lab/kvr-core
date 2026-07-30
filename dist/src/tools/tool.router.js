"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolRouter = void 0;
const common_1 = require("@nestjs/common");
const tool_registry_1 = require("./tool.registry");
let ToolRouter = class ToolRouter {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    execute(name, ...args) {
        const tool = this.registry.get(name);
        if (!tool) {
            return { success: false, error: "Tool not found" };
        }
        return tool(...args);
    }
};
exports.ToolRouter = ToolRouter;
exports.ToolRouter = ToolRouter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tool_registry_1.ToolRegistry])
], ToolRouter);
//# sourceMappingURL=tool.router.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlannerService = void 0;
const common_1 = require("@nestjs/common");
let PlannerService = class PlannerService {
    queue = [];
    async next() {
        if (this.queue.length === 0) {
            return null;
        }
        return this.queue.shift();
    }
    plan(command) {
        const plan = this.createPlan(command);
        this.queue.push(plan);
        return plan;
    }
    createPlan(command) {
        return {
            id: Date.now().toString(),
            command,
            status: 'pending',
            currentStep: 0,
            steps: [
                {
                    id: 'analyze',
                    action: 'analyze',
                    status: 'pending',
                },
                {
                    id: 'execute',
                    action: 'execute',
                    status: 'pending',
                },
            ],
            createdAt: new Date(),
        };
    }
    clear() {
        this.queue.length = 0;
    }
    size() {
        return this.queue.length;
    }
};
exports.PlannerService = PlannerService;
exports.PlannerService = PlannerService = __decorate([
    (0, common_1.Injectable)()
], PlannerService);
//# sourceMappingURL=planner.service.js.map
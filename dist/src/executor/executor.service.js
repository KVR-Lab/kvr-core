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
exports.ExecutorService = void 0;
const common_1 = require("@nestjs/common");
const build_service_1 = require("../build/build.service");
let ExecutorService = class ExecutorService {
    build;
    constructor(build) {
        this.build = build;
    }
    status() {
        return {
            service: 'executor',
            ready: true,
        };
    }
    async execute(plan) {
        if (!plan) {
            return null;
        }
        const results = [];
        if (Array.isArray(plan.steps)) {
            for (const step of plan.steps) {
                switch (step.action) {
                    case 'write':
                        if (step.file) {
                            await this.build.write(step.file, step.content ?? '');
                        }
                        results.push({
                            step: step.action,
                            status: 'done',
                        });
                        break;
                    case 'analyze':
                    case 'execute':
                        results.push({
                            step: step.action,
                            status: 'done',
                        });
                        break;
                    default:
                        results.push({
                            step: step.action,
                            status: 'skipped',
                        });
                }
            }
        }
        return {
            success: true,
            executed: results.length,
            results,
            plan,
        };
    }
};
exports.ExecutorService = ExecutorService;
exports.ExecutorService = ExecutorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [build_service_1.BuildService])
], ExecutorService);
//# sourceMappingURL=executor.service.js.map
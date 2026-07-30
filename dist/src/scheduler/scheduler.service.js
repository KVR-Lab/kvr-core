"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
let SchedulerService = class SchedulerService {
    every(ms, task) {
        return setInterval(async () => {
            try {
                await task();
            }
            catch (e) {
                console.error(e);
            }
        }, ms);
    }
    schedule(task) {
        if (typeof task === "function") {
            return this.every(1000, task);
        }
        if (task?.interval && task?.run) {
            return this.every(task.interval, task.run);
        }
        return null;
    }
};
exports.SchedulerService = SchedulerService;
exports.SchedulerService = SchedulerService = __decorate([
    (0, common_1.Injectable)()
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map
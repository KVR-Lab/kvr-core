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
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const task_queue_1 = require("./task.queue");
let SchedulerService = class SchedulerService {
    queue;
    constructor(queue) {
        this.queue = queue;
    }
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
        if (task && typeof task === "object") {
            return this.enqueue(task);
        }
        return null;
    }
    enqueue(input = {}) {
        return this.queue.enqueue(input);
    }
    dequeueReady(now = Date.now()) {
        return this.queue.dequeueReady(now);
    }
    markDone(id) {
        return this.queue.markDone(id);
    }
    markFailed(id, error) {
        return this.queue.markFailed(id, error);
    }
    cancel(id) {
        return this.queue.cancel(id);
    }
    list() {
        return this.queue.list();
    }
    get(id) {
        return this.queue.get(id) ?? null;
    }
    setMaxConcurrent(value) {
        this.queue.setMaxConcurrent(value);
    }
};
exports.SchedulerService = SchedulerService;
exports.SchedulerService = SchedulerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_queue_1.TaskQueue])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map
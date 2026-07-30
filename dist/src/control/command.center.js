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
exports.CommandCenter = void 0;
const common_1 = require("@nestjs/common");
const command_service_1 = require("../command/command.service");
let CommandCenter = class CommandCenter {
    commands;
    constructor(commands) {
        this.commands = commands;
    }
    overview() {
        return {
            system: 'KVR-Core',
            target: 'KVRAT.ai',
            status: 'online',
            workspace: 'D:\\KVRAT.ai',
            timestamp: new Date().toISOString(),
        };
    }
    build() {
        return this.commands.build();
    }
    dev() {
        return this.commands.dev();
    }
    install() {
        return this.commands.install();
    }
    start() {
        return this.commands.start();
    }
    lint() {
        return this.commands.lint();
    }
    test() {
        return this.commands.test();
    }
    gitStatus() {
        return this.commands.gitStatus();
    }
    gitPull() {
        return this.commands.gitPull();
    }
    gitFetch() {
        return this.commands.gitFetch();
    }
    gitLog() {
        return this.commands.gitLog();
    }
    shell(command) {
        return this.commands.powershell(command);
    }
};
exports.CommandCenter = CommandCenter;
exports.CommandCenter = CommandCenter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [command_service_1.CommandService])
], CommandCenter);
//# sourceMappingURL=command.center.js.map
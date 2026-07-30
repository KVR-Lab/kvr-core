"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandService = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
let CommandService = class CommandService {
    workspace = 'D:\\KVRAT.ai';
    execute(command) {
        try {
            const output = (0, child_process_1.execSync)(command, {
                cwd: this.workspace,
                encoding: 'utf8',
                shell: 'powershell.exe',
            });
            return {
                success: true,
                command,
                output,
                timestamp: new Date().toISOString(),
            };
        }
        catch (error) {
            return {
                success: false,
                command,
                output: error?.stdout?.toString() ?? '',
                error: error?.stderr?.toString() ?? error.message,
                timestamp: new Date().toISOString(),
            };
        }
    }
    build() {
        return this.execute('pnpm build');
    }
    dev() {
        return this.execute('pnpm dev');
    }
    install() {
        return this.execute('pnpm install');
    }
    start() {
        return this.execute('pnpm start');
    }
    lint() {
        return this.execute('pnpm lint');
    }
    test() {
        return this.execute('pnpm test');
    }
    gitStatus() {
        return this.execute('git status');
    }
    gitPull() {
        return this.execute('git pull');
    }
    gitFetch() {
        return this.execute('git fetch');
    }
    gitLog() {
        return this.execute('git log --oneline -10');
    }
    powershell(command) {
        return this.execute(command);
    }
};
exports.CommandService = CommandService;
exports.CommandService = CommandService = __decorate([
    (0, common_1.Injectable)()
], CommandService);
//# sourceMappingURL=command.service.js.map
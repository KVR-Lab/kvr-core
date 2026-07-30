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
exports.BootService = void 0;
const common_1 = require("@nestjs/common");
const startup_check_1 = require("./startup.check");
const orchestrator_service_1 = require("../orchestrator/orchestrator.service");
let BootService = class BootService {
    check;
    orchestrator;
    constructor(check, orchestrator) {
        this.check = check;
        this.orchestrator = orchestrator;
    }
    start() {
        return {
            system: this.check.verify(),
            orchestrator: this.orchestrator.start(),
            status: 'KVR ONLINE'
        };
    }
};
exports.BootService = BootService;
exports.BootService = BootService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [startup_check_1.StartupCheck,
        orchestrator_service_1.OrchestratorService])
], BootService);
//# sourceMappingURL=boot.service.js.map
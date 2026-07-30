"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCenterService = void 0;
const common_1 = require("@nestjs/common");
let ControlCenterService = class ControlCenterService {
    getStatus() {
        return {
            system: {
                name: 'KVR-Core',
                status: 'running',
            },
            runtime: {
                loop: 'active',
                planner: 'ready',
                executor: 'ready',
            },
            projects: [
                {
                    id: 'kvrat',
                    name: 'KVRAT.ai',
                    path: 'D:\\KVRAT.ai',
                    status: 'active',
                },
            ],
            agents: [
                {
                    name: 'ArchitectAgent',
                    status: 'ready',
                },
                {
                    name: 'BackendAgent',
                    status: 'ready',
                },
                {
                    name: 'FrontendAgent',
                    status: 'ready',
                },
                {
                    name: 'AiAgent',
                    status: 'ready',
                },
            ],
        };
    }
};
exports.ControlCenterService = ControlCenterService;
exports.ControlCenterService = ControlCenterService = __decorate([
    (0, common_1.Injectable)()
], ControlCenterService);
//# sourceMappingURL=control-center.service.js.map
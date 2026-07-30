"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var BootstrapService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const engine_loader_1 = require("./engines/engine.loader");
let BootstrapService = BootstrapService_1 = class BootstrapService {
    logger = new common_1.Logger(BootstrapService_1.name);
    loader = new engine_loader_1.EngineLoader();
    boot() {
        const engines = this.loader.boot();
        const src = path.join(process.cwd(), 'src');
        const modules = [];
        const controllers = [];
        const services = [];
        this.scan(src, modules, controllers, services);
        return {
            status: "ready",
            engines,
            modules,
            controllers,
            services,
            statistics: {
                engines: engines.length,
                modules: modules.length,
                controllers: controllers.length,
                services: services.length
            },
            bootedAt: new Date().toISOString()
        };
    }
    scan(dir, modules, controllers, services) {
        const list = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of list) {
            const full = path.join(dir, item.name);
            if (item.isDirectory()) {
                this.scan(full, modules, controllers, services);
                continue;
            }
            if (item.name.endsWith(".module.ts"))
                modules.push(path.relative(process.cwd(), full));
            if (item.name.endsWith(".controller.ts"))
                controllers.push(path.relative(process.cwd(), full));
            if (item.name.endsWith(".service.ts"))
                services.push(path.relative(process.cwd(), full));
        }
    }
};
exports.BootstrapService = BootstrapService;
exports.BootstrapService = BootstrapService = BootstrapService_1 = __decorate([
    (0, common_1.Injectable)()
], BootstrapService);
//# sourceMappingURL=bootstrap.service.js.map
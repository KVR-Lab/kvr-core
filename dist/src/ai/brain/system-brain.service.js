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
exports.SystemBrainService = void 0;
const common_1 = require("@nestjs/common");
let SystemBrainService = class SystemBrainService {
    constructor() { }
    async process(input) {
        const blueprint = this.generateSystemBlueprint(input);
        return {
            ok: true,
            input,
            blueprint,
            generated: true,
            timestamp: new Date().toISOString(),
        };
    }
    generateSystemBlueprint(input) {
        const t = input.toLowerCase();
        if (t.includes('متجر') ||
            t.includes('كفرات') ||
            t.includes('tires') ||
            t.includes('shop') ||
            t.includes('store')) {
            return {
                type: 'e-commerce',
                modules: [
                    'auth',
                    'users',
                    'products',
                    'categories',
                    'brands',
                    'cart',
                    'orders',
                    'payments',
                    'shipping',
                    'inventory',
                    'reviews',
                ],
                database: [
                    'users',
                    'products',
                    'categories',
                    'brands',
                    'carts',
                    'cart_items',
                    'orders',
                    'order_items',
                    'payments',
                    'reviews',
                    'inventory',
                ],
                api: [
                    'POST /auth/register',
                    'POST /auth/login',
                    'GET /products',
                    'GET /products/:id',
                    'POST /products',
                    'POST /cart/add',
                    'GET /cart',
                    'POST /orders',
                    'GET /orders',
                    'POST /payments/checkout',
                ],
                roadmap: [
                    'Setup Auth System',
                    'Create Product Module',
                    'Create Cart System',
                    'Create Orders Flow',
                    'Integrate Payments',
                    'Build Admin Dashboard',
                ],
            };
        }
        return {
            type: 'generic',
            modules: ['core'],
            database: ['memory'],
            api: [],
            roadmap: ['Handle request'],
        };
    }
};
exports.SystemBrainService = SystemBrainService;
exports.SystemBrainService = SystemBrainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SystemBrainService);
//# sourceMappingURL=system-brain.service.js.map
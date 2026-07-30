"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainOsService = void 0;
const common_1 = require("@nestjs/common");
let BrainOsService = class BrainOsService {
    execute(input) {
        return {
            ok: true,
            system: "brain-os",
            data: input
        };
    }
};
exports.BrainOsService = BrainOsService;
exports.BrainOsService = BrainOsService = __decorate([
    (0, common_1.Injectable)()
], BrainOsService);
//# sourceMappingURL=brain-os.service.js.map
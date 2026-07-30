"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo2Module = void 0;
const common_1 = require("@nestjs/common");
const demo2_service_1 = require("./demo2.service");
let Demo2Module = class Demo2Module {
};
exports.Demo2Module = Demo2Module;
exports.Demo2Module = Demo2Module = __decorate([
    (0, common_1.Module)({
        providers: [demo2_service_1.Demo2Service],
        exports: [demo2_service_1.Demo2Service]
    })
], Demo2Module);
//# sourceMappingURL=demo2.module.js.map
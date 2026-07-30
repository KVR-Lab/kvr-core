"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalCommerceOSModule = void 0;
const common_1 = require("@nestjs/common");
const digital_commerce_os_service_1 = require("./digital-commerce-os.service");
let DigitalCommerceOSModule = class DigitalCommerceOSModule {
};
exports.DigitalCommerceOSModule = DigitalCommerceOSModule;
exports.DigitalCommerceOSModule = DigitalCommerceOSModule = __decorate([
    (0, common_1.Module)({
        providers: [digital_commerce_os_service_1.DigitalCommerceOSService],
        exports: [digital_commerce_os_service_1.DigitalCommerceOSService]
    })
], DigitalCommerceOSModule);
//# sourceMappingURL=digital-commerce-os.module.js.map
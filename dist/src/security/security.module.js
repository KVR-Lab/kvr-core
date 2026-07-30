"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const identity_module_1 = require("./identity/identity.module");
const vault_module_1 = require("./vault/vault.module");
const scanner_module_1 = require("./scanner/scanner.module");
const vault_controller_1 = require("./controllers/vault.controller");
const security_controller_1 = require("./controllers/security.controller");
let SecurityModule = class SecurityModule {
};
exports.SecurityModule = SecurityModule;
exports.SecurityModule = SecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            identity_module_1.IdentityModule,
            vault_module_1.VaultModule,
            scanner_module_1.ScannerModule
        ],
        controllers: [
            security_controller_1.SecurityController,
            vault_controller_1.VaultController
        ],
        exports: [
            identity_module_1.IdentityModule,
            vault_module_1.VaultModule,
            scanner_module_1.ScannerModule
        ]
    })
], SecurityModule);
//# sourceMappingURL=security.module.js.map
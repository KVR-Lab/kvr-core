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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const crypto = __importStar(require("crypto"));
const path = __importStar(require("path"));
let VaultService = class VaultService {
    vaultPath = 'D:\\KVR-KEY\\vault';
    registryPath = 'D:\\KVR-KEY\\vault\\metadata\\secrets.registry.json';
    key = crypto
        .createHash('sha256')
        .update('KVR-ROOT-VAULT-KEY')
        .digest();
    status() {
        return {
            system: 'KVR',
            vault: 'ready',
            status: 'locked'
        };
    }
    encryptFile(source, name) {
        const data = fs.readFileSync(source);
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv('aes-256-gcm', this.key, iv);
        const encrypted = Buffer.concat([
            cipher.update(data),
            cipher.final()
        ]);
        const tag = cipher.getAuthTag();
        const output = {
            iv: iv.toString('hex'),
            tag: tag.toString('hex'),
            data: encrypted.toString('hex')
        };
        const target = path.join(this.vaultPath, 'encrypted', name + '.enc');
        fs.writeFileSync(target, JSON.stringify(output, null, 2));
        this.updateRegistry(source, name);
        return {
            source,
            target,
            status: 'encrypted'
        };
    }
    updateRegistry(source, name) {
        let registry = {
            system: 'KVR',
            vault: 'KVR-KEY',
            version: '1.0',
            secrets: [],
            status: 'initialized',
            managedBy: 'KVR-Core'
        };
        if (fs.existsSync(this.registryPath)) {
            registry =
                JSON.parse(fs.readFileSync(this.registryPath, 'utf8'));
        }
        registry.secrets.push({
            name,
            source,
            encrypted: true,
            created: new Date()
                .toISOString()
        });
        registry.status =
            'active';
        fs.writeFileSync(this.registryPath, JSON.stringify(registry, null, 2));
    }
};
exports.VaultService = VaultService;
exports.VaultService = VaultService = __decorate([
    (0, common_1.Injectable)()
], VaultService);
//# sourceMappingURL=vault.service.js.map
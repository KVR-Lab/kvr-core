"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KvratWorkspace = void 0;
const fs_1 = require("fs");
const kvrat_config_1 = require("./kvrat.config");
class KvratWorkspace {
    exists() {
        return (0, fs_1.existsSync)(kvrat_config_1.KVRAT_CONFIG.root);
    }
    root() {
        return kvrat_config_1.KVRAT_CONFIG.root;
    }
    frontend() {
        return kvrat_config_1.KVRAT_CONFIG.frontend;
    }
    backend() {
        return kvrat_config_1.KVRAT_CONFIG.backend;
    }
    mobile() {
        return kvrat_config_1.KVRAT_CONFIG.mobile;
    }
}
exports.KvratWorkspace = KvratWorkspace;
//# sourceMappingURL=kvrat.workspace.js.map
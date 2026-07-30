"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginLoader = void 0;
class PluginLoader {
    plugins = [];
    register(plugin) {
        this.plugins.push(plugin);
    }
    list() {
        return this.plugins.map(p => p.name);
    }
}
exports.PluginLoader = PluginLoader;
//# sourceMappingURL=plugin.loader.js.map
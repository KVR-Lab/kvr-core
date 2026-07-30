import { KvrPlugin } from '../plugin.interface';
export declare class PluginLoader {
    private plugins;
    register(plugin: KvrPlugin): void;
    list(): string[];
}

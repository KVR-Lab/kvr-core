export interface RuntimeEvent {
    id: string;
    name: string;
    source: string;
    payload: unknown;
    timestamp: Date;
}
export declare class RuntimeEventBus {
    private readonly events;
    publish(event: RuntimeEvent): void;
    history(): RuntimeEvent[];
    clear(): void;
}

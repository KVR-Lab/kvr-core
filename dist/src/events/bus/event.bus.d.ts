import { KvrEvent } from '../event.interface';
export declare class EventBus {
    private events;
    publish(event: KvrEvent): void;
    emit(event: KvrEvent): void;
    getEvents(): KvrEvent[];
}

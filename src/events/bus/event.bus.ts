import { Injectable } from '@nestjs/common';

import { KvrEvent } from '../event.interface';

@Injectable()
export class EventBus {


    private events:KvrEvent[] = [];



    publish(
        event:KvrEvent
    ){

        this.events.push(event);

    }



    emit(
        event:KvrEvent
    ){

        this.publish(event);

    }



    getEvents(){

        return this.events;

    }


}

import { Injectable } from "@nestjs/common";

import { EnqueueJobInput } from "./scheduled-job";
import { TaskQueue } from "./task.queue";

@Injectable()
export class SchedulerService {

    constructor(
        private readonly queue: TaskQueue
    ) {}

    every(ms:number, task:()=>Promise<void>|void){

        return setInterval(async()=>{

            try{

                await task();

            }catch(e){

                console.error(e);

            }

        },ms);

    }

    schedule(task:any){

        if(typeof task === "function"){

            return this.every(1000, task);

        }

        if(task?.interval && task?.run){

            return this.every(task.interval, task.run);

        }

        if (task && typeof task === "object") {
            return this.enqueue(task);
        }

        return null;

    }

    enqueue(input: EnqueueJobInput = {}) {
        return this.queue.enqueue(input);
    }

    dequeueReady(now = Date.now()) {
        return this.queue.dequeueReady(now);
    }

    markDone(id: string) {
        return this.queue.markDone(id);
    }

    markFailed(id: string, error?: unknown) {
        return this.queue.markFailed(id, error);
    }

    cancel(id: string) {
        return this.queue.cancel(id);
    }

    list() {
        return this.queue.list();
    }

    get(id: string) {
        return this.queue.get(id) ?? null;
    }

    setMaxConcurrent(value: number) {
        this.queue.setMaxConcurrent(value);
    }

}

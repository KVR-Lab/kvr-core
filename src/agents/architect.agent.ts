import {Agent} from "../contracts/agent.contract";
import {Task} from "../contracts/task.contract";

export class ArchitectAgent implements Agent{

name="architect";

canHandle(task:Task){
return task.type=="architect" || task.type=="project";
}

async execute(task:Task){
return{
agent:this.name,
status:"done",
task
};
}

}

import { RuntimeContext } from "./runtime.context";
export interface RuntimeSession {
    id: string;
    context: RuntimeContext;
    startedAt: Date;
    lastActivity: Date;
    isActive: boolean;
}

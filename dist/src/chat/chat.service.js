"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const chat_store_1 = require("./chat.store");
const event_bus_1 = require("../events/bus/event.bus");
const command_parser_1 = require("../command/command.parser");
const agent_service_1 = require("../agent/agent.service");
let ChatService = class ChatService {
    store;
    eventBus;
    parser;
    agent;
    constructor(store, eventBus, parser, agent) {
        this.store = store;
        this.eventBus = eventBus;
        this.parser = parser;
        this.agent = agent;
    }
    async send(message, sessionId = 'default') {
        this.store.add(sessionId, message);
        const command = this.parser.parse(message);
        this.eventBus.emit({
            name: 'chat.message',
            payload: command,
            createdAt: new Date(),
        });
        const task = {
            message,
            command,
            build: false,
            shell: null,
        };
        if (message.startsWith('/build')) {
            task.build = true;
        }
        if (message.startsWith('/ps ')) {
            task.shell = message.substring(4).trim();
        }
        if (message.startsWith('/dev')) {
            task.command = 'dev';
        }
        if (message.startsWith('/install')) {
            task.command = 'install';
        }
        if (message.startsWith('/status')) {
            task.command = 'status';
        }
        const response = await this.agent.execute(task);
        return {
            ok: true,
            role: 'KVR',
            sessionId,
            response,
            history: this.store.get(sessionId),
            timestamp: new Date().toISOString(),
        };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_store_1.ChatStore,
        event_bus_1.EventBus,
        command_parser_1.CommandParser,
        agent_service_1.AgentService])
], ChatService);
//# sourceMappingURL=chat.service.js.map
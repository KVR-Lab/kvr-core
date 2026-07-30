"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KvratModule = void 0;
const common_1 = require("@nestjs/common");
const kvrat_controller_1 = require("./kvrat.controller");
const kvrat_service_1 = require("./kvrat.service");
const kvrat_adapter_1 = require("./kvrat.adapter");
const kvrat_report_1 = require("./report/kvrat.report");
const kvrat_report_writer_1 = require("./report/kvrat.report.writer");
let KvratModule = class KvratModule {
};
exports.KvratModule = KvratModule;
exports.KvratModule = KvratModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            kvrat_controller_1.KvratController,
        ],
        providers: [
            kvrat_service_1.KvratService,
            kvrat_adapter_1.KvratAdapter,
            kvrat_report_1.KvratReport,
            kvrat_report_writer_1.KvratReportWriter,
        ],
        exports: [
            kvrat_service_1.KvratService,
        ],
    })
], KvratModule);
//# sourceMappingURL=kvrat.module.js.map
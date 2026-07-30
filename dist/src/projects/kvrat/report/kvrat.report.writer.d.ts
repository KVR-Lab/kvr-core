import { KvratReport } from "./kvrat.report";
export declare class KvratReportWriter {
    private readonly report;
    private readonly target;
    constructor(report: KvratReport);
    generateFiles(): {
        success: boolean;
        file: string;
    };
}

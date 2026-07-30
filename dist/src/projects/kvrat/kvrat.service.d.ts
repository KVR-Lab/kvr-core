import { KvratReport } from "./report/kvrat.report";
import { KvratReportWriter } from "./report/kvrat.report.writer";
export declare class KvratService {
    private readonly reportEngine;
    private readonly reportWriter;
    private readonly root;
    private readonly indexer;
    private readonly docsEngine;
    constructor(reportEngine: KvratReport, reportWriter: KvratReportWriter);
    status(): {
        exists: boolean;
        root: string;
    };
    index(): {
        project: string;
        root: string;
        files: number;
        directories: number;
        sourceFiles: number;
        apps: string[];
        packages: string[];
        lastIndexed: string;
    };
    report(): {
        project: string;
        root: string;
        progress: string;
        apps: string[];
        completed: string[];
        missing: string[];
        checks: {
            backend: boolean;
            landing: boolean;
            web: boolean;
            mobile: boolean;
            packages: boolean;
            docker: boolean;
            workspace: boolean;
            env: boolean;
            readme: boolean;
            git: boolean;
        };
        generatedAt: string;
    };
    writeReport(): {
        success: boolean;
        file: string;
    };
    docs(): {
        success: boolean;
        output: string;
        generated: string[];
    };
    writeDocs(): {
        success: boolean;
        output: string;
        generated: string[];
    };
    install(): {
        success: boolean;
        project: string;
    };
    build(): {
        success: boolean;
        command: string;
    };
    dev(): {
        success: boolean;
        command: string;
    };
    command(command: string): {
        success: boolean;
        executed: string;
    };
}

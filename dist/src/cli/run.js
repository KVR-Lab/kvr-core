"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_runner_1 = require("../runner/project.runner");
async function main() {
    const file = process.argv[2];
    if (!file) {
        console.log("Usage: kvr run project.kvr");
        return;
    }
    const runner = new project_runner_1.ProjectRunner();
    console.log(runner.run(file));
}
main();
//# sourceMappingURL=run.js.map
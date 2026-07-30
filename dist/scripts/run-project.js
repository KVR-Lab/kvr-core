"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const project_runner_1 = require("../src/build/project.runner");
(async () => {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const runner = app.get(project_runner_1.ProjectRunner);
    await runner.run(process.argv[2]);
    await app.close();
})();
//# sourceMappingURL=run-project.js.map
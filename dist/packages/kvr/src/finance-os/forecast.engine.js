"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastEngine = void 0;
class ForecastEngine {
    execute(input) {
        return {
            engine: "forecast",
            success: true,
            data: input
        };
    }
}
exports.ForecastEngine = ForecastEngine;
//# sourceMappingURL=forecast.engine.js.map
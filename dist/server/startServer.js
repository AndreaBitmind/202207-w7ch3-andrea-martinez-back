"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../loadEnvironment");
const debug_1 = __importDefault(require("debug"));
const chalk_1 = __importDefault(require("chalk"));
const _1 = __importDefault(require("."));
const debug = (0, debug_1.default)("robositos:server:startServer");
const startServer = (port) => new Promise((resolve, reject) => {
    const server = _1.default.listen(port, () => {
        debug(chalk_1.default.green(`Server listening on http://localhost:${port}`));
        resolve(true);
    });
    server.on("error", (error) => {
        debug(chalk_1.default.red("Error starting the server"));
        if (error.code === "EADDRINUSE") {
            debug(chalk_1.default.red(`Port ${port} in use`));
        }
        reject(error);
    });
});
exports.default = startServer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalError = exports.notFoundError = void 0;
require("../../loadEnvironment");
const debug_1 = __importDefault(require("debug"));
const chalk_1 = __importDefault(require("chalk"));
const debug = (0, debug_1.default)("robositos:server:middlewares/errors");
const notFoundError = (req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
};
exports.notFoundError = notFoundError;
const generalError = (error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    const errorCode = error.statusCode ?? 500;
    const errorMessage = error.publicMessage ?? "Everything has peted";
    debug(chalk_1.default.red(error.message));
    res.status(errorCode).json({ error: errorMessage });
};
exports.generalError = generalError;

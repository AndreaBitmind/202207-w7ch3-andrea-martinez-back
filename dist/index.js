"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
require("./loadEnvironment");
const startServer_1 = __importDefault(require("./server/startServer"));
const port = +process.env.PORT || 4000;
const mongoURL = process.env.MONGODB_URL;
(async () => {
    try {
        await (0, database_1.default)(mongoURL);
        await (0, startServer_1.default)(port);
    }
    catch (error) {
        process.exit(1);
    }
})();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../loadEnvironment");
const debug_1 = __importDefault(require("debug"));
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = __importDefault(require("mongoose"));
const debug = (0, debug_1.default)("robositos:database:index");
const connectDB = (mongoUrl) => new Promise((resolve, reject) => {
    mongoose_1.default.set("toJSON", {
        virtuals: true,
        transform: (doc, ret) => {
            const newDocument = { ...ret };
            // eslint-disable-next-line no-underscore-dangle
            delete newDocument.__v;
            // eslint-disable-next-line no-underscore-dangle
            delete newDocument._id;
            return newDocument;
        },
    });
    mongoose_1.default.connect(mongoUrl, (error) => {
        if (error) {
            debug(chalk_1.default.red("Error connecting to database", error.message));
            reject(error);
            return;
        }
        debug(chalk_1.default.blue("Connected to database"));
        resolve(true);
    });
});
exports.default = connectDB;

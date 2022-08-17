"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const robotSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: new Date(),
    },
});
const Robot = (0, mongoose_1.model)("Robot", robotSchema, "robots");
exports.default = Robot;

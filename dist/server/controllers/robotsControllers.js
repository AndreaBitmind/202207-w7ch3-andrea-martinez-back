"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRobot = exports.getAllRobots = void 0;
const Robot_1 = __importDefault(require("../../database/models/Robot"));
const CustomError_1 = __importDefault(require("../../utils/CustomError"));
const getAllRobots = async (req, res) => {
    const robots = await Robot_1.default.find();
    res.status(200).json({ robots });
};
exports.getAllRobots = getAllRobots;
const createRobot = async (req, res, next) => {
    const robot = req.body;
    try {
        const newRobot = await Robot_1.default.create(robot);
        res.status(201).json({ robot: newRobot });
    }
    catch (error) {
        const customError = new CustomError_1.default(400, error.message, "Error creating new robot");
        next(customError);
    }
};
exports.createRobot = createRobot;

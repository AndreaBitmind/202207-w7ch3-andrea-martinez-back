"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const robotsControllers_1 = require("../controllers/robotsControllers");
const robotsRouter = express_1.default.Router();
robotsRouter.get("/", robotsControllers_1.getAllRobots);
robotsRouter.post("/create", robotsControllers_1.createRobot);
exports.default = robotsRouter;

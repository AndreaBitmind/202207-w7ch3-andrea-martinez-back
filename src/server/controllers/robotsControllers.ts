import { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robot";
import User from "../../database/models/User";
import CustomError from "../../utils/CustomError";
import { CustomRequest } from "../middlewares/authentication";

export const getAllRobots = async (req: CustomRequest, res: Response) => {
  const robots = await Robot.find().populate("owner", {
    userName: 1,
  });

  res.status(200).json({ robots });
};

export const createRobot = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const robot = req.body;

  robot.owner = req.payload.id;

  try {
    const newRobot = await Robot.create(robot);

    const user = await User.findById(req.payload.id);
    user.robots.push(newRobot.id);
    user.save();

    res.status(201).json({ robot: newRobot });
  } catch (error) {
    const customError = new CustomError(
      400,
      error.message,
      "Error creating new robot"
    );
    next(customError);
  }
};

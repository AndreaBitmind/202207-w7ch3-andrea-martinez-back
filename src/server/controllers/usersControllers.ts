import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import User from "../../database/models/User";
import {
  JwtPayload,
  LoginData,
  UserData,
  UserRegister,
} from "../../interfaces/usersInterface";
import { createToken, hashCompare, hashCreator } from "../../utils/Auth";
import CustomError from "../../utils/CustomError";

let findUsers: Array<UserData>;

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body as LoginData;
  const userError = new CustomError(
    403,
    "User not found",
    "User or password not valid"
  );

  try {
    findUsers = await User.find({ userName: user.userName });
    if (findUsers.length === 0) {
      next(userError);
      return;
    }
  } catch (error) {
    const finalError = new CustomError(
      403,
      `name:${error as Error}.message`,
      "User or password not valid"
    );
    next(finalError);
    return;
  }

  try {
    const isPasswordValid = await hashCompare(
      user.password,
      findUsers[0].password
    );
    if (!isPasswordValid) {
      userError.message = "Password invalid";
      next();
      return;
    }
  } catch (error) {
    const finalError = new CustomError(
      403,
      `name:${error as Error}.message`,
      "User or password not valid"
    );
    next(finalError);
    return;
  }

  const payload: JwtPayload = {
    id: findUsers[0].id,
    userName: findUsers[0].userName,
  };

  const responseData = {
    user: {
      token: createToken(payload),
    },
  };

  res.status(200).json(responseData);
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: UserRegister = req.body;
  user.password = await hashCreator(user.password);

  try {
    const newUser = await User.create(user);
    res.status(200).json({ user: newUser });
  } catch (error) {
    const userError = new CustomError(
      400,
      error.message,
      "Error creating new user"
    );
    next(userError);
    return;
  }
};

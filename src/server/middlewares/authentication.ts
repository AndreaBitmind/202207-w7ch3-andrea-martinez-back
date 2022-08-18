import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../../utils/Auth";
import CustomError from "../../utils/CustomError";

export interface CustomRequest extends Request {
  payload: JwtPayload;
}

const authentication = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const dataAuthentication = req.get("Authorization");
  const error = new CustomError(400, "Bad request", "Authentication error");
  if (!dataAuthentication || !dataAuthentication.startsWith("Bearer")) {
    next(error);
    return;
  }

  const token = dataAuthentication.slice(7);
  const verifyData = verifyToken(token);
  if (typeof verifyData === "string") {
    next(error);
  }
  req.payload = verifyData as JwtPayload;
  next();
};

import "../loadEnvironment";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JwtPayload } from "../interfaces/usersInterface";

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.SECRET);
};

export const hashCreator = (text: string) => {
  const salt = 10;
  return bcrypt.hash(text, salt);
};

export const hashCompare = (text: string, hash: string) => {
  return bcrypt.compare(text, hash);
};

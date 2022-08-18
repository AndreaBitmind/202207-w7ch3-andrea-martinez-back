import "../loadEnvironment";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export interface JwtPayload {
  id: string;
  userName: string;
}

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.SECRET);
};

export const hashCreator = (textToHash: string, salt: number) =>
  bcrypt.hash(textToHash, salt);

export const hashComparer = (password: string, hashedPassword: string) =>
  bcrypt.compare(password, hashedPassword);

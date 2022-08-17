import "../loadEnvironment";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  userName: "";
}

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.SECRET);
};

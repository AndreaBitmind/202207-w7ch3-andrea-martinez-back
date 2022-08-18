import express from "express";
import multer from "multer";

import { loginUser, registerUser } from "../controllers/usersControllers";

const usersRouter = express.Router();

/* const uploader = multer({ dest: "/uploads" }); */

usersRouter.post("/login", loginUser);
usersRouter.post("/register", registerUser);

export default usersRouter;

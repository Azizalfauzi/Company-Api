import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";

const userRouter = express.Router();

userRouter.use(authMiddleware);

//User Api
userRouter.get("/api/users/current", userController.get);

export { userRouter };

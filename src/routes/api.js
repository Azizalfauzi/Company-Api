import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
import employeeController from "../controller/employee-controller.js";

const userRouter = express.Router();

userRouter.use(authMiddleware);

//User Api
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);
//Employee Api
userRouter.post("/api/employee", employeeController.create);
userRouter.get("/api/employee/:employeeId", employeeController.get);

export { userRouter };

import { Router } from "express";
import { errorHandler } from "../../middlewares/error-handling.middleware.js";
import { creatrUser } from "./user.controller.js";
const userRouter = Router();

userRouter.post("/",errorHandler(creatrUser));
export default userRouter;

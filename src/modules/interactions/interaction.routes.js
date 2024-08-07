import {Router} from "express";
import { analytics } from "./interaction.controller.js";
import { errorHandler } from "../../middlewares/error-handling.middleware.js";

const interactionRouter = Router();

interactionRouter.get('/',errorHandler(analytics));
export  default interactionRouter ;
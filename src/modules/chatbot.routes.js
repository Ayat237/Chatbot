import { Router } from "express";
import { handleChatbot } from "./chatbot.controller.js";
import { errorHandler } from "../middlewares/error-handling.middleware.js";
const chatRouter = Router();

chatRouter.post("/", errorHandler(handleChatbot));
export default chatRouter;

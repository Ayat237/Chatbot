import {Router} from "express";
import { handleChatbot } from "./chatbot.controller.js";
import { errorHandler } from "../../middlewares/error-handling.middleware.js";
import UsertIp from "../../middlewares/requestIp.middleware.js";
const chatRouter = Router();

chatRouter.post('/',UsertIp(),errorHandler(handleChatbot));
export  default chatRouter ;
import {Router} from "express";
import { getChatHistory, handleChatbot } from "./chatbot.controller.js";
import { errorHandler } from "../../middlewares/error-handling.middleware.js";
import UsertIp from "../../middlewares/requestIp.middleware.js";
import { trackInteractions } from "../../middlewares/interactions.middleware.js";
const chatRouter = Router();

chatRouter.post('/',
    UsertIp(),
    trackInteractions(),
    errorHandler(handleChatbot));
chatRouter.get('/history',
    UsertIp(),
    trackInteractions(), 
    errorHandler(getChatHistory));
export  default chatRouter ;
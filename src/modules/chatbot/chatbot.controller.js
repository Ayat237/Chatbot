//Configuration
import openai from "../../config/openai.config.js";

// Database connection
import database from "../../../db/databaseConnection.js";

//models
import { UserModel } from "../../../db/models/user.model.js";

//Utils
import { ChatGPTService } from "../../services/chatgpt.service.js";
import { Roles } from "../../utils/enums.utils.js";
import { ErrorClass } from "../../utils/error-class.utils.js";

//services
import {
  getMessages,
  saveMessage,
} from "../../services/messageManager.service.js";



const userModel = new UserModel(database)
const chatGPTService = new ChatGPTService(openai);

// Can be later be made as a standalone service containing all available platforms
const chatService = chatGPTService;

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Object} response , chatHistory
 * @api {post} /chat   send a chat message to the server
 */
export const handleChatbot = async (req, res, next) => {
  const { message } = req.body;
  const userId = req.userId;  

  if (!userId || !message) {
    return next(new ErrorClass("message is required", 404));
  }

  await saveMessage(userId, Roles.USER, message);

  const responseMessage = await chatService.sendMessage(userId, message);

  await saveMessage(userId, Roles.ASSISTANT, responseMessage);

  const messages = await getMessages(userId);

  return res.status(200).json({
    response: responseMessage,
    chatHistory: messages,
  });
};

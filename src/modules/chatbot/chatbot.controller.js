//Configuration
import openai from "../../config/openai.config.js";

//models
import { userModel } from "../../../DB/Model/user.model.js";

//Utils
import { ChatGPTService } from "../../services/chatgpt.service.js";
import { Roles } from "../../utils/enums.utils.js";
import { ErrorClass } from "../../utils/error-class.utils.js";

//services
import { getMessages, saveMessage } from "../../services/messageManager.service.js";

const chatGPTService = new ChatGPTService(openai);

// Can be later be made as a standalone service containing all available platforms
const chatService = chatGPTService

/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @returns {Object} response , chatHistory
 * @api {post} /chat   send a chat message to the server 
 */
export const handleChatbot = async(req, res, next)=>{
    const {userId, message } = req.body
    
    const userExist  = await userModel.findById(userId)
    
    // Check if user exists
    if (!userExist) {
        return next(new ErrorClass('User not found',404));
    }
    
    if (!userId ||!message) {
        return next(new ErrorClass('message are required',404));
    }
    
    // Save the user's message in the database
    await saveMessage(userId, Roles.USER, message);;
    
    const responseMessage = await chatService.sendMessage(userId, message);

    // Save the assistant's response in the database
    await saveMessage(userId, Roles.ASSISTANT, responseMessage);

    //retrieve the message from the database
    const Messages = await getMessages(userId);

    console.log('Response sent to client:  ', responseMessage);

    return res.status(200).json({
        response : responseMessage,
        chatHistory : Messages
    });
}
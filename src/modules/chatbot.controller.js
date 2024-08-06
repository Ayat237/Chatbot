import { errorHandler } from "../middlewares/error-handling.middleware.js";
import { ChatGPTService } from "../services/chatgpt.service.js";
import { ErrorClass } from "../utils/error-class.utils.js";
import openai from '../config/openai.config.js';

const chatGPTService = new ChatGPTService(openai);

// Can be later be made as a standalone service containing all available platforms
const chatService = chatGPTService
 
export const handleMessage = async (userMessage) => {
        const response = await chatService.sendMessage(userMessage);
        console.log('Response from ChatGPT:  ', response);
        return response;
    }    

export const handleChatbot = async(req, res, next)=>{
    
    const { message } = req.body;
    if (!message) {
        return next(new ErrorClass('Message is required', 404));
    }
    console.log(message);
    
    const responseMessage = await handleMessage(message);
    console.log('Response sent to client:  ', responseMessage);
    return res.status(200).json({response : responseMessage});
}
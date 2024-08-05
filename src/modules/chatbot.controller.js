import { errorHandler } from "../middlewares/error-handling.middleware.js";
import { ChatGPTService } from "../services/chatgpt.service.js";
import { ErrorClass } from "../utils/error-class.utils.js";

const chatService = new ChatGPTService();

export const handleMessage = async (userMessage) => {
        const response = await chatService.sendMessage(userMessage);
        console.log('Response from ChatGPT:  ', response);
        return response;
    }    

export const handleChatbot = async(req, res, next)=>{
    
    const { message } = req.body;
    if (!message) {
        return next(new ErrorClass('Message is required',404));
    }
    console.log(message);
    
    const responseMessage = await handleMessage(message);
    console.log('Response sent to client:  ', responseMessage);
    return res.status(200).json({response : responseMessage});
}
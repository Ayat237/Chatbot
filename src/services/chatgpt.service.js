import { errorHandler } from '../middlewares/error-handling.middleware.js';
import ChatPlatform from '../interfaces/chatPlatform.interface.js';


/**
 * @param {*} message 
 * @returns {object} message
 * @description send message to OpenAI server and return respnse object
 */
// export const sendMessageToOpenAi = errorHandler(
//   async (message) => {
  
//     const response = await openai.chat.completions.create({
//            model: "gpt-4o-mini",
//            messages: [{ role: "user", content: message }],
//        });
//        return response.choices[0].message.content;
//    }
// )
// export class ChatGPTService extends ChatPlatform {
//   async sendMessage(message) {
//     return sendMessageToOpenAi(message);
//   }
// }


export class ChatGPTService extends ChatPlatform {
  constructor(openaiInstance) {
    super();
    this.openai = openaiInstance;
  }

  async sendMessage(message) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error in sending message:', error);
      throw error;
    }
  }
}
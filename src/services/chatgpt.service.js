import ChatPlatform from "../interfaces/chatPlatform.interface.js";
import { Roles } from "../utils/enums.utils.js";
import { getMessages } from "./messageManager.service.js";

/**
 * @param {} userId
 * @param {} message
 * @returns {object} message
 * @description send message to OpenAI server and return respnse object
 */
export class ChatGPTService extends ChatPlatform {
  constructor(openaiInstance) {
    super();
    this.openai = openaiInstance;
  }

  async sendMessage(userId, userMessage) {
    try {
      // get previous messages of user ;
      const previousMessages = await getMessages(userId);
      // create context for chatbot to understand the user's previous messages ;
      const context = previousMessages.map((msg) => ({
        role: msg.role === Roles.USER ? Roles.USER : Roles.ASSISTANT,
        content: msg.message,
      }));

      // add new message of user ;
      context.push({
        role: Roles.USER,
        content: userMessage,
      });

      // send message to OpenAI server and get response ;
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: context,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error in sending message:", error);
      throw error;
    }
  }
}

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
      const previousMessages = await getMessages(userId);

      const context = previousMessages.map((msg) => ({
        role: msg.role === Roles.USER ? Roles.USER : Roles.ASSISTANT,
        content: msg.message,
      }));

      context.push({
        role: Roles.USER,
        content: userMessage,
      });

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

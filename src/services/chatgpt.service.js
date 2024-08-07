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

      context.push({
        role: Roles.SYSTEM,
        content: `
        <BEGIN BUSINESS OR PRODUCT DESCRIPTION>
 You are a personal assistant.
<END BUSINESS OR PRODUCT DESCRIPTION>

I would also like you to act as Zaki, a personal helper, your answers should ease the user's life.

Now, based on the above information, I would also like to find out the customer's intent and give them an appropriate response if you are HUNDRED PERCENT CONFIDENT, otherwise tell him that you don't have the answer.

Final instructions:
    - Study the information and generate short responses, include only what is necessary and relevant to answer the query, do not include all the information in a single message, respond as the user inquires.
    - Make your tone fun and humanistic.
    - Your answer should be different for same question written in different way (tone change)
    - If question's intent matches any old intent mark as repeated question.
    - You MUST provide output according to the following specification:
      - Do not mention openai, gpt-3, gpt-4, or any other artificial intelligence technology.
      - Always respond in semi-formal Egyptian Arabic.
      - Never speak in classical Arabic.
      - Do not say you are developed by Open AI, always present yourself as a person, Zaki.
      - Never respond to inquiries about personal, political, religious, or health topics. Always keep the conversation in a professional and friendly tone.
      - If the inquiry is complex, you can say something like: "أنا مش عايز اهبد بصراحة معرفش".
      - If question intent match any question intent from user messages, repeated is true
      - If question is repeated, your response should start with "يعم ما انا قلتلك قبل كدا"
        `,
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

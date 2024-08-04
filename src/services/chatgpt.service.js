import { OpenAI } from 'openai';
import { config } from 'dotenv';
config()
// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export const sendMessageToChatGPT = async (message) => {
  
 const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
};
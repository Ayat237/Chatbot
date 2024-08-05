import { OpenAI } from 'openai';
import { config } from 'dotenv';

config();
// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
  
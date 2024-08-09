# Chatbot project
## Overview
This project is a chatbot application that includes functionality for interacting with a chatbot, logging interactions, and generating analytics reports. It uses MongoDB for data storage and Mongoose as the ODM. The project is built using Node.js and Express.

## Features
- **OpenAI Integration:** Enhances chatbot capabilities for intelligent and context-aware responses.
- **Analytics:** Tracks unique IP addresses and overall request patterns without relying on traditional authentication methods.
- **SOLID Principles:** Ensures code modularity, maintainability, and extensibility.
- **Agile Methodology:** Utilizes Jira for organized and iterative project development.

## Request Link
You can test the application using the following request link:
[Chatbot API](http://54.92.212.138:5000)

## How to Use
- **Access the Chatbot:** Simply click on the [Chatbot API link on AWS](http://54.92.212.138:5000) to interact with the application,
- or you can visit the Vercel deployment link: [Chatbot API link on vercel](https://chatbot-v2-blond.vercel.app/)
- **Analyze Interactions:** Use the API to explore the analytics and track user requests oand show chat history

## API Endpoints
Chatbot API
POST /chat: Send a message to the chatbot and receive a response.
Chatbot History : 
GET /chat/history: Retrieve chat histoy for each user
Analytics API
GET /analytics: Retrieve a report on user interactions, including the number of unique IPs and total requests.

## Installation Steps
1. **Clone the Repository**
Start by cloning the repository to your local machine using Git:
git clone https://github.com/yourusername/chatbot-application.git
cd chatbot-application
2. **Install Dependencies**
Navigate to the project directory and install the required dependencies:
npm install
3. **Set Up Environment Variables**
Create a .env file in the root directory of the project. Add the following environment variables:
 .env

# Application Port
PORT=5000

# MongoDB Connection URI
DB_URI =mongodb+srv://Ayat237:o2xwul62PHE2TVXW@chatbot.nhy5j.mongodb.net/Chatbot

# OpenAI API Key
OPENAI_API_KEY=your-openai-api-key

4. **Run the Application**
Once you've set up the environment variables, you can start the application using the following command:
npm start
The application should now be running on http://localhost:5000 or the port specified in your .env file.


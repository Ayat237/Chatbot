// 📁 db/mongooseDatabase.js
import mongoose from "mongoose";
import IDatabase from "./interfaces/IDatabase.js";
import { Message } from "./models/message.model.js";
import { User } from "./models/user.model.js";

class MongooseDatabase extends IDatabase {
  constructor(uri) {
    super();
    this.uri = uri;
    this.models = {
      user: User,
      message: Message,
    };
  }

  async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error in database connection:", error.message);
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Database disconnected successfully");
    } catch (error) {
      console.error("Error in database disconnection:", error.message);
      throw error;
    }
  }

  async createDocument(collection, data) {
    const Model = this.models[collection];
    if (!Model) {
      throw new Error(`Model for collection '${collection}' not found.`);
    }
    return await Model.create(data);
  }

  async getUserMessageHistory(userId, sortDirection = "asc") {
    try {
      const messages = await this.models.message.find({ userId }).sort({ createdAt: sortDirection === "asc" ? 1 : -1 });
      return messages;
    } catch (error) {
      console.error("Error fetching messages:", error.message);
      throw error;
    }
  }
}

export default MongooseDatabase;

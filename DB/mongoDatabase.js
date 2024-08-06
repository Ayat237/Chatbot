// 📁 db/mongooseDatabase.js
import mongoose from "mongoose";
import IDatabase from "./interfaces/IDatabase.js";

class MongooseDatabase extends IDatabase {
  constructor(uri) {
    super();
    this.uri = uri;
  }

  async connect() {
    try {
      // TODO

      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error in database connection:", error.message);
      throw error;
    }
  }

  async disconnect() {
    // TODO
  }

  async create(model, data) {
    // TODO
  }

  async findById(model, id) {
    // TODO
  }

  // Implement other methods as needed
}

export default MongooseDatabase;

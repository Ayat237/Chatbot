import mongoose from "mongoose";

class BaseModel {
    constructor(database, modelName, schema) {
      this.database = database;
      this.model = mongoose.models[modelName] || mongoose.model(modelName, schema);
    }
  
    async create(data) {
      return await this.database.create(this.model, data);
    }
  
    async findById(id) {
      return await this.database.findById(this.model, id);
    }
  
    // Other common operations...
  }
  
  export default BaseModel;
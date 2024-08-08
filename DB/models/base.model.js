class BaseModel {
    constructor(database, collectionName) {
      this.database = database;
      this.collectionName = collectionName;
    }
  
    async create(data) {
      return await this.database.createDocument(this.collectionName, data);
    }
  
    async findById(id) {
      return await this.database.findById(this.collectionName, id);
    }
    // Other common operations...
  }
  
  export default BaseModel;
class IDatabase {
    connect() {
      throw new Error("Method 'connect()' must be implemented.");
    }
  
    disconnect() {
      throw new Error("Method 'disconnect()' must be implemented.");
    }
  
    async create(model, data) {
      throw new Error("Method 'create()' must be implemented.");
    }
  
    async findById(model, id) {
      throw new Error("Method 'findById()' must be implemented.");
    }
  
    // Additional methods like update, delete, etc.
  }
  
  export default IDatabase;
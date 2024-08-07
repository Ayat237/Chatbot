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
  
    async getUserMessageHistory (userId, sortDirection = "asc") {
      throw new Error("Method 'getUserMessageHistory()' must be implemented.");
    }

    async getInteractionHistory() {
      throw new Error("Method 'getInteractionHistory()' must be implemented.");
  }

    async getUniqueIps() {
      throw new Error("Method 'getUniqueIps()' must be implemented.");
  }

  }
  
export default IDatabase;
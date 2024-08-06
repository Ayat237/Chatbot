class ChatPlatform {
  constructor() {
    if (this.constructor === ChatPlatform) {
      throw new Error("Cannot instantiate abstract class ChatPlatform");
    }
  }

  async sendMessage(userId, message) {
    throw new Error("Method not implemented.");
  }
}

export default ChatPlatform;
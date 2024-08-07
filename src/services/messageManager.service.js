import database from "../../db/databaseConnection.js";
import { MessageModel } from "../../DB/models/message.model.js";



const messageModel = new MessageModel(database)
/**
 * @param userId
 * @param Role
 * @param message
 * @returns {object} newMessage
 * @description save the message to the database
 */
export const saveMessage = async (userId, role, message) => {
  const newMessage = await messageModel.create({ userId, role, message });
  return newMessage;
};

/**
 * @param userId
 * @returns {Array} messages
 * @description retrieve the message from the database
 */
export const getMessages = async (userId) => {
  const messages = await messageModel.getUserMessageHistory(userId)
  return messages;
};

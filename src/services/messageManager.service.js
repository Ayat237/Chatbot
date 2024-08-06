import { messageModel } from "../../DB/Model/message.model.js";

/**
 * @param userId
 * @param Role
 * @param message
 * @returns {object} newMessage
 * @description save the message to the database
 */
export const saveMessage = async (userId, role, messages) => {
  const newMessage = new messageModel({ userId, role, message: messages });
  await newMessage.save();
  return newMessage;
};

/**
 * @param userId
 * @returns {Array} messages
 * @description retrieve the message from the database
 */
export const getMessages = async (userId) => {
  // retrieve the message to the database
  const messages = await messageModel.find({ userId }).sort({ createdAt: 1 });
  return messages;
};

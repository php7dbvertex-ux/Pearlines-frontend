import Message from "../models/message.model.js";

const createMessage = async (messageData) => {
  return await Message.create(messageData);
};

const getMessagesByChatId = async (chatId) => {
  return await Message.find({
    chatId,
  }).sort({
    createdAt: 1,
  });
};

export default {
  createMessage,
  getMessagesByChatId,
};

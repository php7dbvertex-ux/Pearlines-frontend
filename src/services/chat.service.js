import Chat from "../models/chat.model.js";

const createChat =
  async (
    patientName,
    mobileNo
  ) => {
    const existingChat =
      await Chat.findOne({
        mobileNo,
      });

    if (existingChat) {
      return existingChat;
    }

    return await Chat.create({
      patientName,
      mobileNo,
    });
  };

const getAllChats =
  async () => {
    return await Chat.find().sort({
      lastMessageAt: -1,
    });
  };

const getChatByMobileNo =
  async (mobileNo) => {
    return await Chat.findOne({
      mobileNo,
    });
  };

const updateLastMessage =
  async (
    chatId,
    message
  ) => {
    return await Chat.findByIdAndUpdate(
      chatId,
      {
        lastMessage:
          message,

        lastMessageAt:
          new Date(),
      },
      {
        new: true,
      }
    );
  };

export default {
  createChat,
  getAllChats,
  getChatByMobileNo,
  updateLastMessage,
};
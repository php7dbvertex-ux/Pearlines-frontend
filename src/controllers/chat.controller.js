import chatService from "../services/chat.service.js";

const createChat =
  async (req, res) => {
    try {
      const {
        patientName,
        mobileNo,
      } = req.body;

      const chat =
        await chatService.createChat(
          patientName,
          mobileNo
        );

      res.status(201).json({
        success: true,
        data: chat,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllChats =
  async (req, res) => {
    try {
      const chats =
        await chatService.getAllChats();

      res.status(200).json({
        success: true,
        count:
          chats.length,
        data: chats,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export default {
  createChat,
  getAllChats,
};
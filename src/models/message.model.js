import mongoose from "mongoose";

const messageSchema =
  new mongoose.Schema(
    {
      chatId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
      },

      senderType: {
        type: String,
        enum: [
          "user",
          "admin",
        ],
        required: true,
      },

      message: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default mongoose.model(
  "Message",
  messageSchema
);
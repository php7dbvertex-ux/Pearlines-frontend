import mongoose from "mongoose";

const chatSchema =
  new mongoose.Schema(
    {
      patientName: {
        type: String,
        required: true,
      },

      mobileNo: {
        type: String,
        required: true,
        unique: true,
      },

      lastMessage: {
        type: String,
        default: "",
      },

      lastMessageAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default mongoose.model(
  "Chat",
  chatSchema
);
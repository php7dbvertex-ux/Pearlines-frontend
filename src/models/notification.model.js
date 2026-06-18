import mongoose from "mongoose";

const notificationSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      message: {
        type: String,
        required: true,
        trim: true,
      },

      imageUrl: {
        type: String,
        default: "",
      },

      publicId: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default mongoose.model(
  "Notification",
  notificationSchema
);
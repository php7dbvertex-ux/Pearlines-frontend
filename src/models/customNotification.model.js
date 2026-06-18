import mongoose from "mongoose";

const customNotificationSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

     
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
  "CustomNotification",
  customNotificationSchema
);
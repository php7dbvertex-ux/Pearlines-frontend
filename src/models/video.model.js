import mongoose from "mongoose";

const videoSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      videoUrl: {
        type: String,
        required: true,
        trim: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default mongoose.model(
  "Video",
  videoSchema
);
import mongoose from "mongoose";

const bannerSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      imageUrl: {
        type: String,
        required: true,
      },

      publicId: {
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
  "Banner",
  bannerSchema
);
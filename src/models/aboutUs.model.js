import mongoose from "mongoose";

const aboutUsSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      website: {
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
  "AboutUs",
  aboutUsSchema
);
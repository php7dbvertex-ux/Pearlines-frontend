import mongoose from "mongoose";

const termsConditionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default mongoose.model("TermsCondition", termsConditionSchema);

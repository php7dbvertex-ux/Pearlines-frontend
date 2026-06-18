import mongoose from "mongoose";

const paymentSchema =
  new mongoose.Schema(
    {
      patientName: {
        type: String,
        required: true,
        trim: true,
      },

      amount: {
        type: Number,
        required: true,
      },

      paymentId: {
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
  "Payment",
  paymentSchema
);
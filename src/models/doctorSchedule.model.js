import mongoose from "mongoose";

const doctorScheduleSchema =
  new mongoose.Schema(
    {
      doctorId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Doctor",

        required: true,
      },

      date: {
        type: Date,
        required: true,
      },

      time: {
        type: String,
        required: true,
      },

      status: {
        type: String,

        enum: [
          "Available",
          "Not Available",
          "Leave",
        ],

        default:
          "Available",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

export default mongoose.model(
  "DoctorSchedule",
  doctorScheduleSchema
);
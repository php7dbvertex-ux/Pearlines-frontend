import DoctorSchedule from "../models/doctorSchedule.model.js";

// ============================
// Create Schedule
// ============================

const createSchedule =
  async (scheduleData) => {
    return await DoctorSchedule.create(
      scheduleData
    );
  };

// ============================
// Get All Schedules
// ============================

const getAllSchedules =
  async () => {
    return await DoctorSchedule.find()
      .populate(
        "doctorId",
        "name"
      )
      .sort({
        createdAt: -1,
      });
  };

// ============================
// Get Schedule By Id
// ============================

const getScheduleById =
  async (scheduleId) => {
    return await DoctorSchedule.findById(
      scheduleId
    ).populate(
      "doctorId",
      "name"
    );
  };

// ============================
// Update Schedule
// ============================

const updateSchedule =
  async (
    scheduleId,
    updateData
  ) => {
    return await DoctorSchedule.findByIdAndUpdate(
      scheduleId,
      updateData,
      {
        new: true,
      }
    );
  };

// ============================
// Delete Schedule
// ============================

const deleteSchedule =
  async (scheduleId) => {
    return await DoctorSchedule.findByIdAndDelete(
      scheduleId
    );
  };

export default {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
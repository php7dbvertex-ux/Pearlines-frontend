import doctorScheduleService from "../services/doctorSchedule.service.js";

// ============================
// Create Schedule
// ============================

const createSchedule =
  async (req, res) => {
    try {
      const schedule =
        await doctorScheduleService.createSchedule(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Doctor schedule created successfully",
        data: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// ============================
// Get All Schedules
// ============================

const getAllSchedules =
  async (req, res) => {
    try {
      const schedules =
        await doctorScheduleService.getAllSchedules();

      res.status(200).json({
        success: true,
        count:
          schedules.length,
        data: schedules,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// ============================
// Get Schedule By Id
// ============================

const getScheduleById =
  async (req, res) => {
    try {
      const schedule =
        await doctorScheduleService.getScheduleById(
          req.params.id
        );

      if (!schedule) {
        return res.status(404).json({
          success: false,
          message:
            "Schedule not found",
        });
      }

      res.status(200).json({
        success: true,
        data: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// ============================
// Update Schedule
// ============================

const updateSchedule =
  async (req, res) => {
    try {
      const schedule =
        await doctorScheduleService.updateSchedule(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Schedule updated successfully",
        data: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// ============================
// Delete Schedule
// ============================

const deleteSchedule =
  async (req, res) => {
    try {
      await doctorScheduleService.deleteSchedule(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Schedule deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export default {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
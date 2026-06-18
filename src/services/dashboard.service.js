import User from "../models/user.model.js";
import Appointment from "../models/appointment.model.js";

const getDashboardStats = async () => {
  const totalUsers =
    await User.countDocuments();

  const totalAppointments =
    await Appointment.countDocuments();

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  tomorrow.setDate(
    tomorrow.getDate() + 1
  );

  const todayAppointments =
    await Appointment.countDocuments({
      appointmentDate: {
        $gte: today,
        $lt: tomorrow,
      },
    });

  return {
    totalUsers,
    totalAppointments,
    todayAppointments,

    // Temporary
    totalDoctors: 0,
  };
};

export default {
  getDashboardStats,
};
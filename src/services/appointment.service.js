import Appointment from "../models/appointment.model.js";

const createAppointment = async (appointmentData) => {
  return await Appointment.create(appointmentData);
};
const getAppointmentById = async (appointmentId) => {
  return await Appointment.findById(appointmentId);
};

const getAllAppointments = async () => {
  return await Appointment.find().sort({
    createdAt: -1,
  });
};
const updateAppointment = async (appointmentId, updateData) => {
  return await Appointment.findByIdAndUpdate(appointmentId, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteAppointment = async (appointmentId) => {
  return await Appointment.findByIdAndDelete(appointmentId);
};

const createRevisitAppointment = async (revisitData) => {
  return await Appointment.create({
    ...revisitData,

    isRevisit: true,
  });
};

const getAllRevisitAppointments = async () => {
  return await Appointment.find({
    isRevisit: true,
  }).sort({
    createdAt: -1,
  });
};

export const getRevisitAppointments = async () => {
  const response = await api.get("/appointments/revisit");

  return response.data;
};

const getTodayAppointments = async () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  return await Appointment.find({
    appointmentDate: {
      $gte: today,
      $lt: tomorrow,
    },

    isRevisit: false,
  }).sort({
    appointmentDate: 1,
  });
};
export default {
  createAppointment,
  getAppointmentById,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  createRevisitAppointment,
  getAllRevisitAppointments,
  getRevisitAppointments,
  getTodayAppointments,
};

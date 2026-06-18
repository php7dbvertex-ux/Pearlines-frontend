import Doctor from "../models/doctor.model.js";

// ============================
// Create Doctor
// ============================

const createDoctor = async (doctorData) => {
  return await Doctor.create(doctorData);
};

// ============================
// Get All Doctors
// ============================

const getAllDoctors = async () => {
  return await Doctor.find().sort({
    createdAt: -1,
  });
};

// ============================
// Get Doctor By Id
// ============================

const getDoctorById = async (doctorId) => {
  return await Doctor.findById(doctorId);
};

// ============================
// Update Doctor
// ============================

const updateDoctor = async (doctorId, updateData) => {
  return await Doctor.findByIdAndUpdate(doctorId, updateData, {
    new: true,
  });
};

// ============================
// Delete Doctor
// ============================

const deleteDoctor = async (doctorId) => {
  return await Doctor.findByIdAndDelete(doctorId);
};

export default {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};

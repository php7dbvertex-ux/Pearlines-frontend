import User from "../models/user.model.js";

const createUser = async (userData) => {
  return await User.create(userData);
};

const getAllUsers = async () => {
  return await User.find().sort({
    createdAt: -1,
  });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

const getUserById = async (id) => {
  return await User.findById(id);
};

export default {
  createUser,
  getAllUsers,
  deleteUser,
  getUserById,
};
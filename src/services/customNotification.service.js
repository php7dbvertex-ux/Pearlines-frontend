import CustomNotification from "../models/customNotification.model.js";
import cloudinary from "../config/cloudinary.js";

const createCustomNotification = async (data) => {
  return await CustomNotification.create(data);
};

const getAllCustomNotifications = async () => {
  return await CustomNotification.find()
    .populate("userId", "mobileNo email")
    .sort({
      createdAt: -1,
    });
};

const deleteCustomNotification = async (id) => {
  const notification = await CustomNotification.findById(id);

  if (!notification) {
    throw new Error("Notification not found");
  }

  if (notification.publicId) {
    await cloudinary.uploader.destroy(notification.publicId);
  }

  await CustomNotification.findByIdAndDelete(id);

  return notification;
};

export default {
  createCustomNotification,
  getAllCustomNotifications,
  deleteCustomNotification,
};

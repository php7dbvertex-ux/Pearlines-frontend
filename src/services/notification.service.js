import Notification from "../models/notification.model.js";
import cloudinary from "../config/cloudinary.js";

// Create Notification

const createNotification =
  async (
    notificationData
  ) => {
    return await Notification.create(
      notificationData
    );
  };

// Get All Notifications

const getAllNotifications =
  async () => {
    return await Notification.find().sort({
      createdAt: -1,
    });
  };

// Get Notification By Id

const getNotificationById =
  async (
    notificationId
  ) => {
    return await Notification.findById(
      notificationId
    );
  };

// Delete Notification

const deleteNotification =
  async (
    notificationId
  ) => {
    const notification =
      await Notification.findById(
        notificationId
      );

    if (!notification) {
      throw new Error(
        "Notification not found"
      );
    }

    if (
      notification.publicId
    ) {
      await cloudinary.uploader.destroy(
        notification.publicId
      );
    }

    await Notification.findByIdAndDelete(
      notificationId
    );

    return notification;
  };

export default {
  createNotification,
  getAllNotifications,
  getNotificationById,
  deleteNotification,
};
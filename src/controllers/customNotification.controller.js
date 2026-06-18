import customNotificationService from "../services/customNotification.service.js";

const createCustomNotification = async (req, res) => {
  try {
    const notification =
      await customNotificationService.createCustomNotification(req.body);

    res.status(201).json({
      success: true,
      message: "Custom notification sent successfully",
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCustomNotifications = async (req, res) => {
  try {
    const notifications =
      await customNotificationService.getAllCustomNotifications();

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCustomNotification = async (req, res) => {
  try {
    await customNotificationService.deleteCustomNotification(req.params.id);

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createCustomNotification,
  getAllCustomNotifications,
  deleteCustomNotification,
};

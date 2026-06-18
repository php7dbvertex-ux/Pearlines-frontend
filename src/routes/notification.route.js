import express from "express";

import notificationController from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/", notificationController.createNotification);

router.get("/", notificationController.getAllNotifications);

router.get("/:id", notificationController.getNotificationById);

router.delete("/:id", notificationController.deleteNotification);

export default router;

import express from "express";

import customNotificationController from "../controllers/customNotification.controller.js";

const router = express.Router();

router.post("/", customNotificationController.createCustomNotification);

router.get("/", customNotificationController.getAllCustomNotifications);

router.delete("/:id", customNotificationController.deleteCustomNotification);

export default router;

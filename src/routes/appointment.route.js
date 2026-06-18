import express from "express";

import appointmentController from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", appointmentController.createAppointment);

router.get("/", appointmentController.getAllAppointments);

router.post("/revisit", appointmentController.createRevisitAppointment);

router.get("/revisit", appointmentController.getAllRevisitAppointments);

router.get("/today", appointmentController.getTodayAppointments);

router.get("/:id", appointmentController.getAppointmentById);
router.put("/:id", appointmentController.updateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

export default router;

import express from "express";

import doctorScheduleController from "../controllers/doctorSchedule.controller.js";

const router = express.Router();

router.post("/", doctorScheduleController.createSchedule);

router.get("/", doctorScheduleController.getAllSchedules);

router.get("/:id", doctorScheduleController.getScheduleById);

router.put("/:id", doctorScheduleController.updateSchedule);

router.delete("/:id", doctorScheduleController.deleteSchedule);

export default router;

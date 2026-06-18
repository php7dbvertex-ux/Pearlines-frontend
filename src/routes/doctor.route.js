import express from "express";

import doctorController from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/", doctorController.createDoctor);

router.get("/", doctorController.getAllDoctors);

router.get("/:id", doctorController.getDoctorById);

router.put("/:id", doctorController.updateDoctor);

router.delete("/:id", doctorController.deleteDoctor);

export default router;

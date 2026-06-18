import express from "express";

import serviceController from "../controllers/service.controller.js";

const router =
  express.Router();

// Create Service

router.post(
  "/",
  serviceController.createService
);

// Get All Services

router.get(
  "/",
  serviceController.getAllServices
);

// Get Service By Id

router.get(
  "/:id",
  serviceController.getServiceById
);

// Update Service

router.put(
  "/:id",
  serviceController.updateService
);

// Delete Service

router.delete(
  "/:id",
  serviceController.deleteService
);

export default router;
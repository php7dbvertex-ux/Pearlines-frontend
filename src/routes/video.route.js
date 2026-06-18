import express from "express";

import videoController from "../controllers/video.controller.js";

const router =
  express.Router();

// Create Video

router.post(
  "/",
  videoController.createVideo
);

// Get All Videos

router.get(
  "/",
  videoController.getAllVideos
);

// Get Video By Id

router.get(
  "/:id",
  videoController.getVideoById
);

// Update Video

router.put(
  "/:id",
  videoController.updateVideo
);

// Delete Video

router.delete(
  "/:id",
  videoController.deleteVideo
);

export default router;
import express from "express";

import upload from "../middlewares/upload.middleware.js";

import uploadController from "../controllers/upload.controller.js";

const router =
  express.Router();

router.post(
  "/",
  upload.single("image"),
  uploadController.uploadImage
);

export default router;
import express from "express";
import galleryController from "../controllers/gallery.controller.js";

const router =
  express.Router();

router.post(
  "/",
  galleryController.createGallery
);

router.get(
  "/",
  galleryController.getAllGallery
);

router.get(
  "/:id",
  galleryController.getGalleryById
);

router.put(
  "/:id",
  galleryController.updateGallery
);

router.delete(
  "/:id",
  galleryController.deleteGallery
);

export default router;
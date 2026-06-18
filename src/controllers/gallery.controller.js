import galleryService from "../services/gallery.service.js";

const createGallery =
  async (req, res) => {
    try {
      const gallery =
        await galleryService.createGallery(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Gallery image added successfully",
        data: gallery,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllGallery =
  async (req, res) => {
    try {
      const gallery =
        await galleryService.getAllGallery();

      res.status(200).json({
        success: true,
        count:
          gallery.length,
        data: gallery,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getGalleryById =
  async (req, res) => {
    try {
      const gallery =
        await galleryService.getGalleryById(
          req.params.id
        );

      if (!gallery) {
        return res.status(404).json({
          success: false,
          message:
            "Gallery image not found",
        });
      }

      res.status(200).json({
        success: true,
        data: gallery,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateGallery =
  async (req, res) => {
    try {
      const gallery =
        await galleryService.updateGallery(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Gallery image updated successfully",
        data: gallery,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteGallery =
  async (req, res) => {
    try {
      await galleryService.deleteGallery(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Gallery image deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export default {
  createGallery,
  getAllGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
};
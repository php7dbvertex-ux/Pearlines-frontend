import Gallery from "../models/gallery.model.js";
import cloudinary from "../config/cloudinary.js";

const createGallery =
  async (galleryData) => {
    return await Gallery.create(
      galleryData
    );
  };

const getAllGallery =
  async () => {
    return await Gallery.find().sort({
      createdAt: -1,
    });
  };

const getGalleryById =
  async (galleryId) => {
    return await Gallery.findById(
      galleryId
    );
  };

const updateGallery =
  async (
    galleryId,
    galleryData
  ) => {
    return await Gallery.findByIdAndUpdate(
      galleryId,
      galleryData,
      {
        new: true,
      }
    );
  };

const deleteGallery =
  async (galleryId) => {
    const gallery =
      await Gallery.findById(
        galleryId
      );

    if (!gallery) {
      throw new Error(
        "Gallery image not found"
      );
    }

    if (gallery.publicId) {
      await cloudinary.uploader.destroy(
        gallery.publicId
      );
    }

    await Gallery.findByIdAndDelete(
      galleryId
    );

    return gallery;
  };

export default {
  createGallery,
  getAllGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
};
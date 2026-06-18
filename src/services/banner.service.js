import Banner from "../models/banner.model.js";
import cloudinary from "../config/cloudinary.js";

// Create Banner

const createBanner =
  async (bannerData) => {
    return await Banner.create(
      bannerData
    );
  };

// Get All Banners

const getAllBanners =
  async () => {
    return await Banner.find().sort({
      createdAt: -1,
    });
  };

// Get Banner By Id

const getBannerById =
  async (bannerId) => {
    return await Banner.findById(
      bannerId
    );
  };

// Update Banner

const updateBanner =
  async (
    bannerId,
    bannerData
  ) => {
    return await Banner.findByIdAndUpdate(
      bannerId,
      bannerData,
      {
        new: true,
      }
    );
  };

// Delete Banner

const deleteBanner = async (bannerId) => {
  const banner =
    await Banner.findById(
      bannerId
    );

  if (!banner) {
    throw new Error(
      "Banner not found"
    );
  }

  // Delete image from Cloudinary

  if (banner.publicId) {
    await cloudinary.uploader.destroy(
      banner.publicId
    );
  }

  // Delete Mongo document

  await Banner.findByIdAndDelete(
    bannerId
  );

  return banner;
};

export default {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
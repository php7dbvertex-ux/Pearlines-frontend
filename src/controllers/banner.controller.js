import bannerService from "../services/banner.service.js";

const createBanner =
  async (req, res) => {
    try {
      const banner =
        await bannerService.createBanner(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Banner created successfully",
        data: banner,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllBanners =
  async (req, res) => {
    try {
      const banners =
        await bannerService.getAllBanners();

      res.status(200).json({
        success: true,
        count:
          banners.length,
        data: banners,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getBannerById =
  async (req, res) => {
    try {
      const banner =
        await bannerService.getBannerById(
          req.params.id
        );

      if (!banner) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Banner not found",
          });
      }

      res.status(200).json({
        success: true,
        data: banner,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateBanner =
  async (req, res) => {
    try {
      const banner =
        await bannerService.updateBanner(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Banner updated successfully",
        data: banner,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteBanner =
  async (req, res) => {
    try {
      await bannerService.deleteBanner(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Banner deleted successfully",
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
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
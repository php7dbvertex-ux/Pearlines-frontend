import videoService from "../services/video.service.js";

// Create Video

const createVideo =
  async (req, res) => {
    try {
      const video =
        await videoService.createVideo(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Video created successfully",
        data: video,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get All Videos

const getAllVideos =
  async (req, res) => {
    try {
      const videos =
        await videoService.getAllVideos();

      res.status(200).json({
        success: true,
        count:
          videos.length,
        data: videos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get Video By Id

const getVideoById =
  async (req, res) => {
    try {
      const video =
        await videoService.getVideoById(
          req.params.id
        );

      if (!video) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Video not found",
          });
      }

      res.status(200).json({
        success: true,
        data: video,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Update Video

const updateVideo =
  async (req, res) => {
    try {
      const video =
        await videoService.updateVideo(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Video updated successfully",
        data: video,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Delete Video

const deleteVideo =
  async (req, res) => {
    try {
      await videoService.deleteVideo(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Video deleted successfully",
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
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
};
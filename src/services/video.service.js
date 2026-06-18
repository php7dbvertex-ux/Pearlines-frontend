import Video from "../models/video.model.js";

// Create Video

const createVideo =
  async (videoData) => {
    return await Video.create(
      videoData
    );
  };

// Get All Videos

const getAllVideos =
  async () => {
    return await Video.find().sort({
      createdAt: -1,
    });
  };

// Get Video By Id

const getVideoById =
  async (videoId) => {
    return await Video.findById(
      videoId
    );
  };

// Update Video

const updateVideo =
  async (
    videoId,
    videoData
  ) => {
    return await Video.findByIdAndUpdate(
      videoId,
      videoData,
      {
        new: true,
      }
    );
  };

// Delete Video

const deleteVideo =
  async (videoId) => {
    const video =
      await Video.findById(
        videoId
      );

    if (!video) {
      throw new Error(
        "Video not found"
      );
    }

    await Video.findByIdAndDelete(
      videoId
    );

    return video;
  };

export default {
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
};
import Tip from "../models/tip.model.js";
import cloudinary from "../config/cloudinary.js";

const createTip =
  async (tipData) => {
    return await Tip.create(
      tipData
    );
  };

const getAllTips =
  async () => {
    return await Tip.find().sort({
      createdAt: -1,
    });
  };

const getTipById =
  async (tipId) => {
    return await Tip.findById(
      tipId
    );
  };

const updateTip =
  async (
    tipId,
    tipData
  ) => {
    return await Tip.findByIdAndUpdate(
      tipId,
      tipData,
      {
        new: true,
      }
    );
  };

const deleteTip =
  async (tipId) => {
    const tip =
      await Tip.findById(
        tipId
      );

    if (!tip) {
      throw new Error(
        "Tip not found"
      );
    }

    if (tip.publicId) {
      await cloudinary.uploader.destroy(
        tip.publicId
      );
    }

    await Tip.findByIdAndDelete(
      tipId
    );

    return tip;
  };

export default {
  createTip,
  getAllTips,
  getTipById,
  updateTip,
  deleteTip,
};
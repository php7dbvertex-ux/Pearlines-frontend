import tipService from "../services/tip.service.js";

const createTip =
  async (req, res) => {
    try {
      const tip =
        await tipService.createTip(
          req.body
        );

      res.status(201).json({
        success: true,
        message:
          "Tip created successfully",
        data: tip,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAllTips =
  async (req, res) => {
    try {
      const tips =
        await tipService.getAllTips();

      res.status(200).json({
        success: true,
        count:
          tips.length,
        data: tips,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getTipById =
  async (req, res) => {
    try {
      const tip =
        await tipService.getTipById(
          req.params.id
        );

      if (!tip) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Tip not found",
          });
      }

      res.status(200).json({
        success: true,
        data: tip,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateTip =
  async (req, res) => {
    try {
      const tip =
        await tipService.updateTip(
          req.params.id,
          req.body
        );

      res.status(200).json({
        success: true,
        message:
          "Tip updated successfully",
        data: tip,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteTip =
  async (req, res) => {
    try {
      await tipService.deleteTip(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Tip deleted successfully",
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
  createTip,
  getAllTips,
  getTipById,
  updateTip,
  deleteTip,
};
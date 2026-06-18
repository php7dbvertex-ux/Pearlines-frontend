import aboutUsService from "../services/aboutUs.service.js";

// ============================
// Get About Us
// ============================

const getAboutUs = async (req, res) => {
  try {
    const aboutUs = await aboutUsService.getAboutUs();

    res.status(200).json({
      success: true,
      data: aboutUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Update About Us
// ============================

const updateAboutUs = async (req, res) => {
  try {
    const aboutUs = await aboutUsService.updateAboutUs(req.body);

    res.status(200).json({
      success: true,
      message: "About Us updated successfully",
      data: aboutUs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getAboutUs,
  updateAboutUs,
};

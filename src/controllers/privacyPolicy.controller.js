import privacyPolicyService from "../services/privacyPolicy.service.js";

// Get

const getPrivacyPolicy = async (req, res) => {
  try {
    const policy = await privacyPolicyService.getPrivacyPolicy();

    res.status(200).json({
      success: true,
      data: policy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update

const updatePrivacyPolicy = async (req, res) => {
  try {
    const policy = await privacyPolicyService.updatePrivacyPolicy(req.body);

    res.status(200).json({
      success: true,
      message: "Privacy Policy Updated Successfully",
      data: policy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getPrivacyPolicy,
  updatePrivacyPolicy,
};

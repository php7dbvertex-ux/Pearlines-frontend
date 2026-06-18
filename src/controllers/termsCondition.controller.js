import termsConditionService from "../services/termsCondition.service.js";

const getTermsCondition = async (req, res) => {
  try {
    const data = await termsConditionService.getTermsCondition();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTermsCondition = async (req, res) => {
  try {
    const data = await termsConditionService.updateTermsCondition(req.body);

    res.status(200).json({
      success: true,
      message: "Terms & Conditions Updated Successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getTermsCondition,
  updateTermsCondition,
};

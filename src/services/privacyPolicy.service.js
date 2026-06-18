import PrivacyPolicy from "../models/privacyPolicy.model.js";

// Get Privacy Policy

const getPrivacyPolicy = async () => {
  return await PrivacyPolicy.findOne();
};

// Update Privacy Policy

const updatePrivacyPolicy = async (data) => {
  let privacyPolicy = await PrivacyPolicy.findOne();

  if (!privacyPolicy) {
    return await PrivacyPolicy.create(data);
  }

  return await PrivacyPolicy.findByIdAndUpdate(privacyPolicy._id, data, {
    new: true,
  });
};

export default {
  getPrivacyPolicy,
  updatePrivacyPolicy,
};

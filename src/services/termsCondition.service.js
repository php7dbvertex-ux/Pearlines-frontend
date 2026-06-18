import TermsCondition from "../models/termsCondition.model.js";

const getTermsCondition = async () => {
  return await TermsCondition.findOne();
};

const updateTermsCondition = async (data) => {
  let termsCondition = await TermsCondition.findOne();

  if (!termsCondition) {
    return await TermsCondition.create(data);
  }

  return await TermsCondition.findByIdAndUpdate(termsCondition._id, data, {
    new: true,
  });
};

export default {
  getTermsCondition,
  updateTermsCondition,
};

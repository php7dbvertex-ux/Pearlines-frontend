import FAQ from "../models/faq.model.js";

// ============================
// Create FAQ
// ============================

const createFAQ = async (faqData) => {
  return await FAQ.create(faqData);
};

// ============================
// Get All FAQs
// ============================

const getAllFAQs = async () => {
  return await FAQ.find().sort({
    createdAt: -1,
  });
};

// ============================
// Get FAQ By Id
// ============================

const getFAQById = async (faqId) => {
  return await FAQ.findById(faqId);
};

// ============================
// Update FAQ
// ============================

const updateFAQ = async (
  faqId,
  faqData
) => {
  return await FAQ.findByIdAndUpdate(
    faqId,
    faqData,
    {
      new: true,
    }
  );
};

// ============================
// Delete FAQ
// ============================

const deleteFAQ = async (faqId) => {
  return await FAQ.findByIdAndDelete(
    faqId
  );
};

export default {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
};
import faqService from "../services/faq.service.js";

// ============================
// Create FAQ
// ============================

const createFAQ = async (req, res) => {
  try {
    const faq = await faqService.createFAQ(req.body);

    res.status(201).json({
      success: true,
      message: "FAQ created successfully",
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get All FAQs
// ============================

const getAllFAQs = async (req, res) => {
  try {
    const faqs = await faqService.getAllFAQs();

    res.status(200).json({
      success: true,
      count: faqs.length,
      data: faqs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get FAQ By Id
// ============================

const getFAQById = async (req, res) => {
  try {
    const faq = await faqService.getFAQById(req.params.id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Update FAQ
// ============================

const updateFAQ = async (req, res) => {
  try {
    const faq = await faqService.updateFAQ(req.params.id, req.body);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ updated successfully",
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Delete FAQ
// ============================

const deleteFAQ = async (req, res) => {
  try {
    const faq = await faqService.deleteFAQ(req.params.id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: "FAQ not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
};

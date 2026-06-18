import express from "express";

import faqController from "../controllers/faq.controller.js";

const router = express.Router();

router.post("/", faqController.createFAQ);

router.get("/", faqController.getAllFAQs);

router.get("/:id", faqController.getFAQById);

router.put("/:id", faqController.updateFAQ);

router.delete("/:id", faqController.deleteFAQ);

export default router;

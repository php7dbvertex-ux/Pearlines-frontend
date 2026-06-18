import express from "express";

import termsConditionController from "../controllers/termsCondition.controller.js";

const router = express.Router();

router.get("/", termsConditionController.getTermsCondition);

router.put("/", termsConditionController.updateTermsCondition);

export default router;

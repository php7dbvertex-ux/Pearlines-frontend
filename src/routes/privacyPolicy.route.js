import express from "express";

import privacyPolicyController from "../controllers/privacyPolicy.controller.js";

const router =
  express.Router();

router.get(
  "/",
  privacyPolicyController.getPrivacyPolicy
);

router.put(
  "/",
  privacyPolicyController.updatePrivacyPolicy
);

export default router;
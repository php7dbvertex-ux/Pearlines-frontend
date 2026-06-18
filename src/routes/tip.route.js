import express from "express";

import tipController from "../controllers/tip.controller.js";

const router =
  express.Router();

router.post(
  "/",
  tipController.createTip
);

router.get(
  "/",
  tipController.getAllTips
);

router.get(
  "/:id",
  tipController.getTipById
);

router.put(
  "/:id",
  tipController.updateTip
);

router.delete(
  "/:id",
  tipController.deleteTip
);

export default router;
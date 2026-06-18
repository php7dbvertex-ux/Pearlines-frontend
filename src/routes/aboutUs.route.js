import express from "express";

import aboutUsController from "../controllers/aboutUs.controller.js";

const router = express.Router();

router.get("/", aboutUsController.getAboutUs);

router.put("/", aboutUsController.updateAboutUs);

export default router;

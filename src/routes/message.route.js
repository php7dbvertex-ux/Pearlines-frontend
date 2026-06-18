import express from "express";

import messageController from "../controllers/message.controller.js";

const router = express.Router();

router.post("/", messageController.createMessage);

router.get("/:chatId", messageController.getMessagesByChatId);

export default router;

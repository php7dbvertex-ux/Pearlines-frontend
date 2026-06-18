import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.delete("/:id", userController.deleteUser);

router.get("/:id", userController.getUserById);

export default router;
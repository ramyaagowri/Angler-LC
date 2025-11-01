import express from "express";
import { protect } from "../middleware/Auth.js";
import { createOrder, getUserOrders } from "../controllers/Order.controller.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);

export default router;

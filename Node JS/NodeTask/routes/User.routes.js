import express from "express";
import {
  registerUser,
  loginUser,
  getAllCustomers,
  deleteCustomer,
} from "../controllers/User.controller.js";
import { protect, adminOnly } from "../middleware/Auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


//Admin
router.get("/", protect, adminOnly, getAllCustomers);
router.delete("/:id", protect, adminOnly, deleteCustomer);

export default router;

import express from "express";
import multer from "multer";
import { protect, adminOnly } from "../middleware/Auth.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getProducts);
router.post("/", protect, adminOnly, upload.single("image"), createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;

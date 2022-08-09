import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productContoller.js";

//@desc Fetch All Product
//@route GET /api/product
//@access Public

router.route("/").get(getProducts).post(protect, admin, createProduct);

//@desc Fetch Single Product
//@route GET /api/product/:id
//@access Public

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;

import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


router.post("/", createProduct);

router.delete("/:id", deleteProduct)

router.get("/", getProducts)

router.put("/:id", updateProduct)

export default router;
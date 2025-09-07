import express from "express";
import { addUpdateCategory, deleteCategory, getCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addUpdateCategory);
router.put("/", addUpdateCategory);
router.delete("/:id", deleteCategory);
export default router;
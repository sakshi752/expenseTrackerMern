import express from "express";
import {loginUser, register } from "../controllers/authController.js";

const router = express.Router();

router.post('/loginUser',loginUser);
router.post('/register',register);

export default router;



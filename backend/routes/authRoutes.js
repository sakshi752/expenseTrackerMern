import express from "express";
import {loginOrRegisterUser } from "../controllers/authController.js";

const router = express.Router();

router.post('/loginUser',loginOrRegisterUser);

export default router;



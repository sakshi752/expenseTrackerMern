import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import transactionRoutes from "./routes/transactionRoutes.js"
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/api/user",authRoutes);
app.use("/api/transaction",authMiddleware,transactionRoutes);
app.use("/api/category",authMiddleware,categoryRoutes);

export default app;
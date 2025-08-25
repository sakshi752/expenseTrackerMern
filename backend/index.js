import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log('Server running')))
    .catch(err => console.error(err));
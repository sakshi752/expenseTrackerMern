import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    title: { type: String },
    amount: { type: String, required: true, unique: true },
    type: {
        type: String,
        enum: [0, 1], // 0 = income, 1 = expense
        required: true,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const Transaction =
    mongoose.model('Transaction', transactionSchema);

export default Transaction;
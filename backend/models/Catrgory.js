import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    categoryType: {
        type: Number,
        enum: [0, 1], // 0 = income, 1 = expense
        required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

const Category = mongoose.model('Category', categorySchema);
export default Category;
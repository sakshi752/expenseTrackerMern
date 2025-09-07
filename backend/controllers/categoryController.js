import Category from "../models/Catrgory.js";

export const addUpdateCategory = async (req, res) => {
    try {
        const { id, name, categoryType, isDelete } = req.body;
        const userId = req.user.id;

        if (!name || typeof name !== "string" || name.trim().length === 0) {
            return res.status(400).json({ message: "Category name is required" });
        }

        if (!categoryType || ![0, 1].includes(categoryType)) {
            return res.status(400).json({ message: "Invalid category type" });
        }

        if (id) {
            const updatedCategory = await Category.findByIdAndUpdate(
                id, {
                name,
                categoryType,
                isDelete,
            }
            );

            if (!updatedCategory) {
                return res.status(400).json({ message: "Category not found" });
            }

            res.status(200).json({ message: "Category updated successfully" });
        } else {
            const newCategory = new Category({
                name,
                categoryType,
                isDelete,
                user: userId
            });

            await newCategory.save();

            res.status(200).json({
                message: "Category added successfully!"
            })

        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export const getCategories = async (req, res) => {
    try {
        const { limit, page, category_type, is_delete } = req.query;
        limit = parseInt(limit) > 0 ? parseInt(limit) : 10;
        page = parseInt(page) > 0 ? parseInt(page) : 1;

        const filter = { user: req.user.id };

        if (category_type) {
            filter.categoryType = category_type;
        }

        if (is_delete) {
            filter.isDelete = is_delete;
        }

        const categories = await Category.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });

        const total = await Category.countDocuments();

        res.status(200).json({
            totalCount: total,
            data: categories
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}


export const deleteCategory = async (req, res) => {
    try {

        const { id } = req.params;


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

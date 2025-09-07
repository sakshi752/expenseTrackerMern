import Transaction from "../models/Transaction";

export const addUpdateTransaction = async (req, res) => {
    try {
        const { id, title, amount, type, isDelete, category } = req.body;
        const userId = req.user.id;

        if (id) {
            const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
                title,
                amount,
                type,
                isDelete,
                category,
                userId
            });

            if (!updatedTransaction) {
                return res.status(400).json({ message: "Transaction not found" });
            }

            res.status(200).json({ message: "Transaction updated successfully" });
        } else {
            const newTransaction = new Transaction({
                title,
                amount,
                type,
                isDelete,
                category,
                userId
            });

            await newTransaction.save();

            res.status(200).json({
                message: "Transaction added successfully!"
            })

        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
export const getTransactions = async (req, res) => {
    try {
        const { limit, page, category_type, is_delete } = req.query;

        limit = limit && parseInt(limit) > 0 ? parseInt(limit) : 10;
        page = page && parseInt(page) > 0 ? parseInt(page) : 1;
        const filter = { user: req.user.id };

        const transactions = await Transaction.find(filter).skip((page-1)*limit).limit(limit).sort({ createdAt: -1 });

        const total = await Transaction.countDocuments();

        res.status(200).json({
            totalCount: total,
            data: transactions
        })



    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
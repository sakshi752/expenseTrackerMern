export const addUpdateTransaction = (req,res)=>{
    try {
        const {id,title,amount,type,isDelete,category} = req.body;
        const userId = req.user.id;

        if (id) {
            
        } else {
            
        }
        
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}
export const getTransactions = ()=>{}
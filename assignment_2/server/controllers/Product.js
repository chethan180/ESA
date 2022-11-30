import product from "../models/product.js"

export const Product = async (req,res) => {
    try{
        // console.log("HI")
        // res.send("hello");
        const x = await product.find();
        console.log(x)
        res.send( x);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

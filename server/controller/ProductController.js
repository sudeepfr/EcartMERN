import Product from "../models/Product.js"

export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.json(products);
    }catch(error){
         res.json(error);
    }
}
export const createProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.json({message:"Product added successfully",product});   
    }catch(error){
         res.json(error);
    }
}

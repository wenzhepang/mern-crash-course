import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({success: true, products});
}

export const createProduct = async (req, res) => {
    const product = req.body; // req.body is the data that we send from the frontend
    if(!product.name || !product.price || !product.image){
    }//check if the fields are filled

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success: true, product: newProduct});//201 is for created
    }catch(error){
        console.log("Error in creating product",Error = error.message);
        res.status(500).json({success: false, message: error.message});//500 is for internal server error
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    console.log("id:",id);
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }catch(error){
        console.log("Error in deleting product",Error = error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Product not found"});
    }
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, product: updatedProduct});
    }catch(error){
        console.log("Error in updating product",Error = error.message);
        res.status(500).json({success: false, message: error.message});
    }
}
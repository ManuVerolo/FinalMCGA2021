import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/products.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const Products = await Product.find();

        res.status(200).json(Products);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createProduct = async (req, res) => {
    const { name , description, selectedFile, price } = req.body;

    const newProduct = new Product({ name, description, selectedFile, price })

    try {
        await newProduct.save();

        res.status(201).json(newProduct );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No existe el producto con el id  : ${id}`);

    const updateProduct = { name, description, price, selectedFile, _id: id };

    await Product.findByIdAndUpdate(id, updateProduct, { new: true });

    res.json(updateProduct);
}

export const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No existe el producto con el id: ${id}`);

        await Product.findByIdAndRemove(id);

        res.json({ message: "Producto eliminado correctamente" });
    }catch (error){
        console.log(error);
    }
    
}
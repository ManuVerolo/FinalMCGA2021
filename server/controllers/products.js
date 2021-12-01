import express from 'express';
import mongoose from 'mongoose';
import Products from '../models/products.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const Products = await Products.find();
                
        res.status(200).json(Products);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createProduct = async (req, res) => {
    const { name , description, selectedFile, price } = req.body;

    const newProduct = new Products({ name, description, selectedFile, price })

    try {
        await newProduct.save();

        res.status(201).json(newProduct );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}


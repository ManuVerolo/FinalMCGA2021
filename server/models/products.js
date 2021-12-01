import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    selectedFile: String,
    price: Number,
})

var Product = mongoose.model('Product', productSchema);

export default Product;
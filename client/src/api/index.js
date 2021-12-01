import axios from 'axios';

const url = 'http://localhost:5000/products';

export const fetchProducts = () => axios.get(url); // get all products
export const createProduct = (newProduct) => axios.post(url, newProduct); // create new product
//export const updateProduct = (id, updateProduct) => axios.put(`${url}/${id}`, updatedProduct);
//export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

import axios from 'axios';

const url = 'https://final-mcga-2021.herokuapp.com/products';

export const fetchProducts = () => axios.get(url); // get all products
export const createProduct = (newProduct) => axios.post(url, newProduct); // create new product
export const updateProduct = (id, updatedProduct) => axios.put(`${url}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

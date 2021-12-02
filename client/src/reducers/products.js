export default (products = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...products, action.payload];
        case 'UPDATE':
            return products.map((product) => product.__id === action.payload.__id ? action.payload : product);
        case 'DELETE':
            //Mantengo los productos menos el que se elimina
            return products.filter((product) => product._id !== action.payload);
        default:
            return products;
    }
}
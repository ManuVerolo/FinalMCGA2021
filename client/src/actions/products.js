import * as api from '../api';

//ACTION CREATORS
export const getProducts = () => (dispatch) => {
    try{
        const { data } = await api.getProducts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch (error){
        console.log(error);
    }
);
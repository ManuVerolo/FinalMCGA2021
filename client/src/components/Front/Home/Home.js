import React, {useState, useEffect}from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../actions/products';
import Products from '../../../components/Front/Products/Products';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    });

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" >
                    <Grid item xs={6} sm={12}> 
                        <Products />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home

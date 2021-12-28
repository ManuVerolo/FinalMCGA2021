import React, {useState, useEffect}from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../actions/products';
import Products from '../Products/Products';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={6} sm={8}> 
                        <Products setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={6} sm={4}> 
                        <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home

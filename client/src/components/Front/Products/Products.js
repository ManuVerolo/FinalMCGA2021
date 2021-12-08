import React from 'react';
import { CircularProgress, Grid  } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Product from './Product/Product';

import useStyles from './styles';


const Products = () => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();
  return (
    !products.length ? <CircularProgress className={classes.cirularProgress} /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={3} sm={3} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Products;

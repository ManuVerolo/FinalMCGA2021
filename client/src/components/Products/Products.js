import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Product from './Products';
import useStyles from './styles';

const Products = () => {
  const classes = useStyles();

  return (
    !products.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={6}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Products;

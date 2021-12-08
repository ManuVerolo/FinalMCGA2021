import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import Product from './Product/Product';
import useStyles from './styles';


const Products = ({ setCurrentId }) => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();
  const columns = [
    { field: 'name', title: 'Nombre'},
    { field: 'price', title: 'Precio'},
    { field: 'description', title: 'Descripción'},
  ]
  return (
    !products.length ? <CircularProgress className={classes.cirularProgress} /> : (
      <Table columns={columns} data={products} setCurrentId={setCurrentId} title={'Productos'} />
      /*<Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={6}>
            <Product product={product} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>*/
    )
  );
};

export default Products;

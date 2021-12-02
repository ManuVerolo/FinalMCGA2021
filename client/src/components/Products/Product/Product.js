import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../actions/products';

const Product = ({product, setCurrentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.name} />
      <div className={classes.overlay2}>
        {/* <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(product._id)}><MoreHorizIcon fontSize="medium" /></Button> */}
      </div>
      <Typography className={classes.name} variant="h4" component="h2">{product.name}</Typography>
      <CardContent>
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">Descripción: {product.description}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">${product.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="error" onClick={() => dispatch(deleteProduct(product._id))}><DeleteIcon  color="error" fontSize="small" /> Eliminar</Button>
        <Button size="small" color="primary" onClick={() => setCurrentId(product._id)}><EditIcon fontSize="small" /> Editar</Button>
      </CardActions>
    </Card>
  );
};


export default Product;

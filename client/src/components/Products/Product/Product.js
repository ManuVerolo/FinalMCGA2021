import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

const Product = ({product, setCurrentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.name} />
      <div className={classes.overlay2}>
        
      </div>
      <Typography className={classes.name} variant="h4" component="h2">{product.name}</Typography>
      <CardContent>
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">Descripción: {product.description}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">${product.price}</Typography>
      </CardContent>
    </Card>
  );
};


export default Product;

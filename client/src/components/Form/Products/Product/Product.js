import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Product = ({product}) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="medium" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{product.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Product;

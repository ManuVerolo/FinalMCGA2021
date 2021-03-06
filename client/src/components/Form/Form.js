import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './form-styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { createProduct, updateProduct } from '../../actions/products';
import {Alert} from 'react-bootstrap'

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({name: '', description: '', price: '', selectedFile: ''});
  const product = useSelector((state) => (currentId ? state.products.find((name) => name._id === currentId) : null));
  const [errors, setErrors] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect (() => {
    if(product) setProductData(product);
  }, [product]);


  const handleSubmit = (e) => {
    e.preventDefault();
    //Si exite id actualizo sino creo uno nuevo
    if(currentId === 0){
      validateForm(productData);
        dispatch(createProduct(productData));
        clear();
    }else{
      validateForm(productData);
      dispatch(updateProduct(currentId, productData));
      clear();
    }
    
  }

  const validateForm = () => {
    let errors = [];
    if(!productData.name) errors.name = 'El nombre es requerido';
    if(!productData.description) errors.description = 'La descripción es requerida';
    if(!productData.price) errors.price = 'El precio es requerido';
    if(errors !== []){
      setErrors(errors);
      return;
    }
  }

  const clear = () => {
    setCurrentId(0);
    setProductData({name: '', description: '', price: '', selectedFile: ''});
  }
  

  return (

      <Paper className={classes.paper}>
        <form autoComplete="off"className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography  variant="h6">{currentId ? `Editando "${product.name}"` : 'Crear producto'}</Typography>
          <TextField required name="name"  variant="outlined" label="Nombre" fullWidth value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
          {errors.name && <Alert variant="danger">{errors.name}</Alert>}
          <TextField required name="description"  variant="outlined" label="Descripción" fullWidth  multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
          {errors.description && <Alert variant="danger">{errors.description}</Alert>}
          <TextField required  name="price"  type="number" variant="outlined" label="Precio" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })}/>
          {errors.price && <Alert variant="danger">{errors.price}</Alert>}
          <div className={classes.fileInput}><FileBase type="file" multiple={false}  onDone={({ base64 }) => setProductData({ ...productData, selectedFile: base64 })}/></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Guardar</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar</Button>
        </form>
      </Paper>
    );
};

export default Form;
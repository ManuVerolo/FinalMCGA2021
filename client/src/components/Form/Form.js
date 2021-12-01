import React, {useState, useEffect} from 'react';
import useStyles from './form-styles';
import {TextField, Button, Grid, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';

const Form = () => {
  const classes = useStyles();
    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6">{'Crear Producto'}</Typography>
            <TextField name="name" variant="outlined" label="Name" fullWidth  />
            <TextField name="description" variant="outlined" label="Description" fullWidth  />
            <TextField name="price" variant="outlined" label="Price" fullWidth multiline rows={4} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false}/></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
          </form>
        </Paper>
      );
}

export default Form;
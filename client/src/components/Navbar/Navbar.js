import React from 'react'
import {AppBar, Toolbar, Button } from '@material-ui/core';
import {Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color ="inherit">
            <Toolbar className={classes.heading}>
               <Button className={classes.buttonNav} component={Link} to="/" variant="contained" color="primary">Home</Button>
               <Button className={classes.buttonNav} component={Link} to="/admin/products" variant="contained" color="primary">Productos</Button>
               <Button className={classes.buttonNav} component={Link} to="/about" variant="contained" color="primary">About</Button>
            </Toolbar>
            <Button className={classes.buttonNav} component={Link} to="/signup" variant="contained" color="primary">Login</Button>
            {/* <img className={classes.image} src={logo} alt="posts" height="60" />  */}
        </AppBar>
    )
}

export default Navbar

import React from 'react'
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import {Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color ="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
                    Productos
                </Typography>
                <img className={classes.image} src={logo} alt="posts" height="60" /> 
            </div>
            <Toolbar className={classes.toolbar}>
               <Button component={Link} to="/about" variant="contained" color="primary">About</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

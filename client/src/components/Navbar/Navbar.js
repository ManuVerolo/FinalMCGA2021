import React from 'react'
import {AppBar, Toolbar, Button } from '@material-ui/core';
import {Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import useStyles from './styles';
import { useAuth } from '../../contexts/AuthContext';


const Navbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();
    let button;
    let buttonAdmin;
    if (currentUser) {
        buttonAdmin = <Button className={classes.buttonNav} component={Link} to="/admin/products" variant="contained" color="primary">Productos</Button>
        button = <Button className={classes.buttonNav} onClick={handelLogout} variant="contained" color="primary">Logout</Button>;
    } else {
        button = <Button className={classes.buttonNav} component={Link} to="/login" variant="contained" color="primary">Login</Button>;
        buttonAdmin = "";
    }
    async function  handelLogout(){
        try{
            await logout();
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <AppBar className={classes.appBar} position="static" color ="inherit">
            <Toolbar className={classes.heading}>
               <Button className={classes.buttonNav} component={Link} to="/" variant="contained" color="primary">Home</Button>
               {buttonAdmin}
               <Button className={classes.buttonNav} component={Link} to="/about" variant="contained" color="primary">About</Button>
            </Toolbar>
            {button}
            {/* <Button className={classes.buttonNav} component={Link} to="/signup" variant="contained" color="primary">Registrarse</Button> */}
            {/* <img className={classes.image} src={logo} alt="posts" height="60" />  */}
        </AppBar>
    )
}

export default Navbar

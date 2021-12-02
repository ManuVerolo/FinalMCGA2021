import React from 'react'
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer} >
            Desarrollado por: Manuel Verolo
        </div>
    )
}

export default Footer

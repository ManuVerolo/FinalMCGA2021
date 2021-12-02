import React from 'react'
import { Container, Grow, Grid, Paper, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import pdf from '../../images/ManualDeUsuario.pdf';
const About = () => {
    const classes = useStyles();
    return (
        <Grow in>
        <Container>
            <Grid container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12}> 
                    <Paper className={classes.paper}> 
                        <Typography className={classes.title} variant="h6">ABOUT</Typography>
                        <Typography className={classes.details}>Desarrollado por: Manuel Verolo</Typography>
                        <Typography className={classes.details}>Materia: Modelos Computacionales De Gestión Administrativa</Typography>
                        <Typography className={classes.details}>Carrera: Ingenieria en Sistemas</Typography>
                        <Typography className={classes.details}>Manual de usuario: <Button variant="outlined" download  href={pdf}>Descargar</Button></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default About

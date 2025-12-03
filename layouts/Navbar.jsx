import React from 'react';
import logo from '../src/assets/superheroiak.png';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';

const MenuBarra = () => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <img 
                        src={logo} 
                        alt="Logo de mi empresa" 
                        style={{ width: '150px', edge: "start" }} 
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button color="inherit">Inicio</Button>
                    <Button color="inherit">Nosotros</Button>
                    <Button color="inherit">Contactos</Button>
                </Toolbar>
            </AppBar>
        </>
    )
};
export default MenuBarra;
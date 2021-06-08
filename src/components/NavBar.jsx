import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../imagenes/logo.png";
import { Badge } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';



export default function Navbar(){

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton>
                        <img src={logo} style={{width:"100px"}}/>
                    </IconButton>
                    <Typography style={{fontSize:"10px"}} style={{padding:"10px"}}>
                        INICIO
                    </Typography>
                    <Typography style={{fontSize:"10px"}} style={{padding:"10px"}}>
                        PRODUCTOS
                    </Typography>
                    <Typography style={{fontSize:"10px"}} style={{padding:"10px"}}>
                        INICIAR SESIÓN
                    </Typography>
                    <Typography style={{fontSize:"10px"},{padding:"10px"}}>
                        CARRITO DE COMPRA
                    </Typography>
                    
                    <IconButton color='inherit'>
                    <Badge>
                        <AccountCircle fontSize='medium' style={{color:"black"}}/>
                    </Badge>
                    </IconButton>
                    <IconButton color='inherit'>
                        <Badge color="secondary">
                            <ShoppingCart fontSize='medium' style={{color:"black"}} />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

        </div>


    );
}
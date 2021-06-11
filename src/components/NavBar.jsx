import React from 'react';


import logo from "../imagenes/logo.png";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Badge } from '@material-ui/core';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';


export default function Navbar(){

    return (
        
<div className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={logo} style={{width:"100px"}}/></a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="justify-content-end" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Carrito</a>
        </li>
      </ul>

    </div>
  </div>

</div>

      


/*
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

*/ 

/*
<div className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Nonna Julia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="justify-content-end" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Carrito</a>
        </li>
      </ul>

    </div>
  </div>

</div>






*/ 
    );
}
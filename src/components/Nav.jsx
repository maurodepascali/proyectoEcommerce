import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "../imagenes/logo.png"
import Typography from '@material-ui/core/Typography';



export default function Nav() {
  

  return (
  
  <div className="nav">
    <AppBar className="appBar">
      <Toolbar>
        <IconButton>
          <img src={logo} className="image" width="100"/>
         </IconButton>
          <Typography variant="h6">
            Inicio
          </Typography>
          <Typography variant="h6">
            Productos
          </Typography>
          <Typography variant="h6">
            Carrito
          </Typography>
      </Toolbar>
      
    </AppBar>
  </div>
  );
}


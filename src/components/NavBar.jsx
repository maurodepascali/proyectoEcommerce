import React, { useState } from 'react';
import logo from "../imagenes/logo.png";


export const NavBar = () => {
   
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
          <a className="nav-link">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Carrito:</a>
        </li>
      </ul>

    </div>
  </div>

</div>

    
    );
}
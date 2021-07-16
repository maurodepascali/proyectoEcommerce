import React, { useState, useEffect, useContext } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "../../imagenes/logo.png";
import {Link, useHistory} from "react-router-dom";
import  CartWidget  from "../CartWidget/CartWidget"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./Navbar.css";
import Nav from 'react-bootstrap/Navbar'

export default function Navbar() {

  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.target);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleChange = (e) => {
   if (e.target.value)
    history.push(`/category/${e.target.value}`)
  }

  return (
    

    <Navbar bg="light" variant="light">

    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>

/*
      <div className="navbar">
        <Toolbar>
         <Link to="/">
              <img src={logo} className="logo"/>
          </Link>
          <div className="grow"/>

          <div className="button">
            <Button 
              aria-controls='menu'
              onClick={handleOpenMenu} 
            >
              Productos
            </Button>

          <Menu className="dropdown"
            id='menu' 
            onClose={handleMenuClose} 
            onChange={handleChange}
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)}
            >
            <MenuItem onClick={handleChange} value="Torta">TORTAS</MenuItem>
            <MenuItem onClick={handleChange} value="Medialunas">MEDIALUNAS</MenuItem>
            <MenuItem onClick={handleChange} value="Sandwiches">SANDWICHES</MenuItem>
          </Menu>

           <select onChange={handleChange}>
            <option value="">PRODUCTOS</option>
            <option value="torta">TORTAS</option>
            <option value="facturas">FACTURAS</option>
            <option value="sandwiches">SANDWICHES</option>
           </select>

            <Link to="/cart">
              <CartWidget></CartWidget>
            </Link>
          </div>
        </Toolbar>
      </div>
    */
  );
}


import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import logo from "../../imagenes/logo.png";
import {Link, useHistory} from "react-router-dom";
import  CartWidget  from "../CartWidget/CartWidget"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./Navbar.css";

export default function Navbar({cantidad}) {

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
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo} className="logo"/>
        </Link>
    
        <div className="right">
        <div className="button">
        <Button aria-controls='menu'onClick={handleOpenMenu}>
           Productos
        </Button>
          <Menu className="dropdown"
            id='menu' 
            onClick={handleMenuClose} 
            onChange={handleChange}
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)}
            >
            <MenuItem ><Link to="/category/Tortas" className="linkCategory"><p>Tortas</p></Link></MenuItem>
            <MenuItem ><Link to="/category/Facturas" className="linkCategory"><p>Facturas</p></Link></MenuItem>
            <MenuItem ><Link to="/category/Sandwiches" className="linkCategory"><p>Sandwiches</p></Link></MenuItem>
          </Menu>
      </div>
          <Link to="/cart">
            <CartWidget cantidad={cantidad}></CartWidget>
          </Link>
        </div>
      </div>  
    </div>
  );
}


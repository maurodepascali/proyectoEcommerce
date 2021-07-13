import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../imagenes/logo.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link, useHistory} from "react-router-dom";
import {CartContext} from "../Context/CartContext";
import Cart from "./Cart";
import  {useCartContext}  from "../Context/CartContext";
import  CartWidget  from "./CartWidget"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  grow:{
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  button:{
    marginLeft: theme.spacing(2),

  },
  logo: {
    marginRight: "10px",
    height:"2rem",
  },
}));

export default function Navbar({cantidad}) {
  const classes = useStyles();
  const history = useHistory();

  
  const handleChange = (e) => {
   if (e.target.value)
    history.push(`/category/${e.target.value}`)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <Link to="/">
              <img src={logo} className={classes.logo}/>
          </Link>
          <div className={classes.grow}/>

          <div className={classes.button}>
          
           <select onChange={handleChange}>
            <option value="">Seleccione categoria</option>
            <option value="torta">Tortas</option>
            <option value="facturas">Facturas</option>
            <option value="sandwiches">Sandwiches</option>
           </select>

           <CartWidget cantidad={cantidad} ></CartWidget>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*
<Link to="/cart">
              <IconButton>
                <Badge badgeContent= {2} color="secondary"> 
                  <ShoppingCartIcon color="primary"/>
                </Badge>
              </IconButton>
            </Link>
*/
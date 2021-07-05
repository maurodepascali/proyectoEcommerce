import React from 'react';
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
import {Link} from "react-router-dom";


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

export default function NavBar(props) {
  const classes = useStyles();
  const { product,  cart, onAdd, onRemove  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={logo} className={classes.logo}/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>

          <div className={classes.button}>
            <Link to="checkout-page">
              <IconButton>
                <Badge badgeContent= {1} color="secondary"> 
                  <ShoppingCartIcon color="primary"/>
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


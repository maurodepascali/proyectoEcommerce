import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CartWidget = ({cantidad}) => {

    const {cart, addToCart, setCart} = useCartContext();


    
  return (
    <>
    <Link to="/cart">
      <IconButton>
        <Badge badgeContent= {1} color="secondary"> 
        <ShoppingCartIcon color="primary"/>
        </Badge>
      </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
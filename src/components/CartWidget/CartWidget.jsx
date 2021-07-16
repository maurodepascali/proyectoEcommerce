import React, { useEffect } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const {cantidad, cart, setCantidad} = useCartContext();

    useEffect(() => {
      if (cart.length === 0) {
        setCantidad(0);
      }
    }, [cart, setCantidad]);
  
    
  return (
    <>
    <Link to="/cart">
      <IconButton>
        <Badge badgeContent= {cantidad} color="secondary"> 
        <ShoppingCartIcon color="primary"/>
        </Badge>
      </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
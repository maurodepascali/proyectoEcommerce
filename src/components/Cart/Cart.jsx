import React, {  useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Cart.css";

export const Cart = () => {

  const {cart, removeItem, removeAllItems} = useCartContext();

 if(!cart.length) return <p className= "CartVacio"><Link to="/">Carrito vacio! Haz click aquí para realizar su compra.</Link></p>
 
    return (

    <div className="cart">
      <h1 className= "titulo">CARRITO DE COMPRAS</h1>
        <div className= "productCart">
          {cart.map((item) => 
            <p> {item.name} - {item.cantidad} - Precio: ${item.price}
             <Button onClick={()=>removeItem(item.id)} className= "removeButton"><DeleteIcon/></Button></p>
          )}
          <p>Total: ${cart.reduce((aux, {cantidad,price})=> aux + cantidad * price, 0).toFixed(2)}</p>
            <div className="setCart">
              <Button onClick={(removeAllItems)} className= "removeButton"><DeleteIcon/>VACIAR CARRITO</Button> 
            </div>
        </div>
        <div className="comprar">
            <Button variant="contained" color="primary">
              <Link to="/checkout" className="linkCart">
                <p>COMPRAR</p>
                </Link>
            </Button>
        </div>
    </div>
  )
};
export default Cart;
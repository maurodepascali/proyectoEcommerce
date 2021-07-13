import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import Button from '@material-ui/core/Button';

export const Cart = () => {

  const {cart, clearCart} = useCartContext();

  if(!cart.length) return <Redirect to='/' />

  return (
    <>
    <h1>Carrito de compras</h1>
    {/*
    {cart.map(({item}) => {
      <h1>Producto: {item.name} - {item.cantidad}</h1>
    })}
     
     <Button onClick={clearCart}>Vaciar Carrito</Button> */}
    </>
    
  )
};
export default Cart;
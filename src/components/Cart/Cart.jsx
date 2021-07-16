import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ItemCount from '../ItemCount/ItemCount';


export const Cart = () => {

  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[phone,setPhone] = useState();
  const {cart, removeItem} = useCartContext();

  if(!cart.length) return <Redirect to='/' />

  return (
    <>
    <h1>Carrito de compras</h1>
   
    {cart.map((item) => {
      <h1>Product: {item.name} - {item.cantidad} {item.image}</h1>
    })}
     <ItemCount/>
     <Button onClick={removeItem}><DeleteIcon/></Button>

    <div>
      <input type="email" onInput={(e)=> {setEmail(e.target.value)}}/>
      <input type="tel" onInput={(e)=> {setPhone(e.target.value)}}/>
      <input type="text" onInput={(e)=> {setName(e.target.value)}}/>
    </div>

    <Button onClick={()=>{
      console.log({name,phone,email})
      const venta = {buyer: {name,phone,email}, item: useContext.cart
    }}}>Comprar</Button>

    </>
    
  )
};
export default Cart;
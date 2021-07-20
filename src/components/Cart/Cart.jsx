import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ItemCount from '../ItemCount/ItemCount';
import "./Cart.css";
import accounting  from "accounting";

export const Cart = () => {

 // const[name,setName] = useState();
  //const[email,setEmail] = useState();
 // const[phone,setPhone] = useState();
  const {cart, removeItem} = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const {addToCart} = useCartContext();


 // if(!cart.length) return <Redirect to='/' />
 useEffect(() => {
  if (cart.length > 0) {
    setTotalPrice(
      cart
        .map((product) => product.price * product.cantidad)
        .reduce((total, valor) => total + valor)
    );
  }
}, [cart]);

  return (
    
    
    <div className="cart">
    <h1 className= "titulo">Carrito de compras</h1>
   <div className= "productCart">
    {cart.map((item) => 
      <h1>{item.name} - {item.cantidad} ${item.price} </h1>
   )}
   <p>Total: ${totalPrice}</p>
  {/* <p className="price-detail">Precio: {accounting.formatMoney(item.price, "$")}</p>*/}
      <div className="setCart">
       <ItemCount className= "count"/>
        <Button onClick={removeItem} className= "removeButton"><DeleteIcon/></Button>
      </div>
     </div>

     <div className="comprar">
             <Button variant="contained" color="primary">
               <p>COMPRAR</p>
             </Button>
          </div>
          
    {/* 
    <div>
      <input type="email" onInput={(e)=> {setEmail(e.target.value)}}/>
      <input type="tel" onInput={(e)=> {setPhone(e.target.value)}}/>
      <input type="text" onInput={(e)=> {setName(e.target.value)}}/>
    </div>

    <Button onClick={()=>{
      console.log({name,phone,email})
      const venta = {buyer: {name,phone,email}, item: useContext.cart
    }}}>Comprar</Button>
    */}


</div>
  
    
  )
};
export default Cart;
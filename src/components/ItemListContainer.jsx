import React, { useState } from 'react';
import {Navbar} from './NavBar';

export const ItemListContainer = (props) =>{
  
  const [cart,setCart] = useState([]);
  console.log(cart);
  return (
      
    <div>
       
        <h1>{props.greeting}</h1>
        <h6>Precio: $1500</h6>
        <h1>Torta Brownie</h1>
        <h6>Precio: $1000</h6>
        
        
    </div>
    /*
      <Navbar cart={cart}/>
      <button onClick={() => {setCart([...cart, {id:1,name:'torta', price: 1200}])}}>
        Agregar a carrito
        </button>
    */
  );
}
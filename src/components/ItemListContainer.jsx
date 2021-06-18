import React, { useEffect, useState } from 'react';
import {Cards} from './Cards';
import productData from "../productData";
import Grid from '@material-ui/core/Grid';
import Item from './Item';


export const ItemListContainer = () =>{
  

  
const product = {
     id: 1,
      name: "TORTA OREO",
      price: 1500,
      stock: 5,
      image:
        "https://truffle-assets.imgix.net/f0f7a6e1-torta-oreo-y-ddl_l_thumb.jpg"
    
  }
  
  
  /*
  let [productos, setProductos] = useState([]);
 
 useEffect(()=> {
   const waitForData = async () => {
     let data = await getData();
     let aux = data.map(element => {
       return{
         title: element.title,
         img: element.img,
         price: element.price
       }
      });
      
       setProductos(); 
   }

   waitForData();
  
 },[])
 
 
  <Grid container spacing={2}>
          {
              productData.map((item) =>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Item key={item.id} item={item}/>
                </Grid>
              ))
          }
      </Grid>
 */

  return (
      
    <div>
       
    <Cards name={product.name} price={product.price} stock={product.stock} image={product.image}/>
  
    </div>
    /*
      <Navbar cart={cart}/>
      <button onClick={() => {setCart([...cart, {id:1,name:'torta', price: 1200}])}}>
        Agregar a carrito
        </button>
    */
  );
}
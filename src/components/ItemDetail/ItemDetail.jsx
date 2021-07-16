import React, { useEffect, useState, useContext } from 'react';
import accounting  from "accounting";
import ItemCount  from "../ItemCount/ItemCount";
import  {useCartContext}  from "../../Context/CartContext";
import "./ItemDetail.css";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ShoppingCart } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const ItemDetail = ({product}) => {
  
    const {cart, addToCart, setCart} = useCartContext();
    const [counter, setCounter] = useState(1); 
 
      const onAdd = (cant) =>  
      addToCart(product , cant);
      //setCart(cart);
      console.log(cart);
  
 
 /*   const terminarCompra = ()=>{
      const aux = {
        item: {
          titulo: name,
          precio: price
        },
        quantity: cantidad
      }
      cartContext.addItem(aux)
    }*/
  
  return (
    
 
      <div className="container-detail">
        <div class="row">
          <img className="imagen-detail" src={product.image}/>
          
        <h6 className="titulo-detail">{product.name}</h6>
        <p className="stock-detail">Unidades disponibles: {product.stock}</p>
        <p className="price-detail">Precio: {accounting.formatMoney(product.price, "$")}</p>
          { product.stock > 0 &&
            <ItemCount stock={product.stock} onAdd={onAdd}/>
          }
          <div className="buttonAdd">
             <Button onClick={() => onAdd(counter)} variant="contained" color="primary">
             < ShoppingCart fontSize='medium' /><p>Agregar al carrito</p>
             </Button>
          </div>

             </div>
            
        </div>
    
  
  /* 
    { cantidad > 0 ? 
                <>
                  <Link to="/cart">
                    <Button  className="d-block animated fadeIn" variant="primary"  onClick={terminarCompra} >  Finalizar compra  </Button>
                  </Link>  
                  <Button  className="d-block mt-2 animated fadeIn" variant="secondary" onClick={()=>setCantidad(0)}>  Volver </Button>
                </>

                : 

    <ItemCount 
    stock={stock} 
    initial={1}
    onAdd={onAdd}/>
}*/

  
  )
};
export default ItemDetail;


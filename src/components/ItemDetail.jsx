
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import accounting  from "accounting";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ItemCount  from "./ItemCount";
import  {useCartContext}  from "../Context/CartContext";

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    action:{
      marginTop:"1rem",
    },
    cardAction:{
      display:"flex",
      justifyContent: "flex-end",
      textAlign: "center",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));


const ItemDetail = ({product}) => {
    const classes = useStyles();
  
    const {cart, addToCart} = useCartContext();
  

    const onAdd = (cant) =>  
    addToCart(product , cant);
      console.log(cart);
    
    
    /* 
    const onAdd = (cant) => {
      console.log(`Se agregaron ${cant} productos al carrito`);
      setCantidad( cant )
    };
*/
 
    
 
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
  <div>

      <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
                className={classes.action}
                variant='h6'
                color='textSecondary'
            >
                {accounting.formatMoney(product.price, "$")}
                
            </Typography>
            
       }
        
       subheader={(product.stock,"Unidades disponibles:")}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        description={product.description}
      />

    </Card>


    { product.stock > 0 &&
    <ItemCount stock={product.stock} onAdd = {onAdd}/>
  }
  {/* 
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
}*/}
  </div>
  
  )
};
export default ItemDetail;


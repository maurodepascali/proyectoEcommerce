import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckoutCard from './CheckoutCard';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
    
  },
  button:{
    marginTop:"1rem",
  
  },
  carritoVacio:{
    textAlign:"center",
  }
}));

export default function CheckoutPage(props) {
  const classes = useStyles();
  const { cart, onAdd, onRemove } = props;
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  
 /* function FormRow(){
      return(
        <React.Fragment>
           <div>
              {cart.length === 0 && <div>Carrito vacio</div>
              }
              
            </div>
        {
          cart.map((item) => (
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <CheckoutCard key={item.id} item={item.name}/>
            </Grid>
            ))
        }
      </React.Fragment>
      );
  }
*/
  return (
  
  
      <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h4">
                CARRITO DE COMPRAS
                </Typography>
            </Grid>
            
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
            {cart.length === 0 && <Typography>Carrito vacio</Typography>}
        {cart.map((item) => (
           <Grid item xs={12} sm={8} md={6} lg={4}>
              <CheckoutCard key={item.id} item={item.name} item={item.price} item={item.image}/>
              <Button onClick={() => onRemove(item)} className="remove">
                -
              </Button>
              {item.qty}
              <Button onClick={() => onAdd(item)} className="add">
                +
              </Button>
              
            </Grid>
         
            

            
         
        ))}

      {cart.length !== 0 && (
        <>
      <Grid item xs={12} sm={8} md={6} lg={4}>
           <Typography align="center" gutterBottom variant="h5">
            Precio: ${itemsPrice.toFixed(2)}
           </Typography>
            <Button className={classes.button} onClick={() => alert('Compra exitosa!')} variant="contained" color="secondary">
              Compra
            </Button>
      </Grid>
</>
)}
      </Grid>

           {/* 
            <Grid item xs={12} sm={4} md={3} >
                <Typography align="center" gutterBottom variant="h4">
                <h5>Total items: 3</h5>
            <h5>{accounting.formatMoney(50, "$")}</h5>
            <Button className= "remove" variant="contained" color="secondary" onClick={()=>remove(item)} >-</Button>
            <Button className= "add" variant="contained" color="secondary" onClick={()=>addCart(item)} >+</Button>
           <div>
           {item.qty} x ${item.price.toFixed(2)}
             </div> 
                </Typography>
            </Grid>
*/}
          </Grid>


      </div>
  
  );
}

import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import ProductDetailContainer from './ProductDetailContainer';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    
  },
  titulo:{
    textAlign:"center",
    
  },
  container:{
  padding: "10px"
}
}));

const Products = ({ onAdd, products }) => {
  const classes = useStyles();
 

  return (
    
    <div className={classes.root}>
       <h2 className={classes.titulo}>PRODUCTOS</h2>
      <Grid container spacing={2} className={classes.container}>
        {
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              
              <ProductDetailContainer key={product.id} product={product} onAdd={onAdd}/>
           {/*   <Product key={product.id} product={product} onAdd={onAdd}/> */}
            </Grid>
            ))
        }
      </Grid>
    </div>
  );
}
export default Products;
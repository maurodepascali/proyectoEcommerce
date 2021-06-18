import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from "../productData";


const Products =() => {

  return (
    
    <div>
      
      <Grid container spacing={2}>
          {
              products.map((product) =>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Product key={product.id} product={product}></Product>
                </Grid>
              ))
          }
      </Grid>
    </div>
  );
}
export default Products;
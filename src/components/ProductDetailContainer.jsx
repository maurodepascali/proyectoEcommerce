import React, { useState, useEffect } from "react";
import ProductDetail from './ProductDetail';

const ProductDetailContainer = ({product, onAdd }) => {
 


  return(

    <div>
      <ProductDetail product={product} onAdd={onAdd} />
    </div>
  );
};

export default ProductDetailContainer;

import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';

import { Button } from "@material-ui/core";

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

const ProductDetail = ({ product, onAdd }) => {
  const classes = useStyles();
  
  
  /*const { setCart, setQnt } = useState();
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(product);
  }, [product]);


 
  const [quantity, setQuantity] = useState(1);


  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: article.id,
      name: article.name,
      stock: article.stock,
      price: article.price,
      quantity: article.quantity,
      image: article.image,
    };

    setCart((value) => [...value, prod]);
  };
*/

  return (
  <div>
<Card className={classes.root}>
  <Product product={product} />
  {/* 
  <ItemCount
        initial={1}
        min={0}
        max={product.stock}
        setQuantity={setQuantity}
      /> */}
  <CardActions disableSpacing className={classes.cardAction}>

<IconButton aria-label="Add to cart" onClick={() => onAdd(product)}>
  <AddShoppingCartIcon />
</IconButton> 
{/*
<IconButton variant="contained"
        color="primary"
        onClick={handleClick}
        className="item-detail__btn">{quantity}
  <AddShoppingCartIcon />
</IconButton> 
*/}
</CardActions>
      </Card> 
  </div>
  
  );
}
export default ProductDetail;
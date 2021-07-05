
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import accounting  from "accounting";
import {Link} from "react-router-dom";


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

const Product = ({ product, onAdd  }) =>  {
  const classes = useStyles();
  


  return (
    <Link to={`/producto/${product.id}`}>
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
        title={product.name}
        //subheader={(stock,"Unidades disponibles:")}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
 
  
    
     
    {/* 
      <CardActions disableSpacing className={classes.cardAction}>

        <IconButton aria-label="Add to cart" onClick={() => onAdd(product)}>
          <AddShoppingCartIcon />
        </IconButton>
       
      </CardActions>
*/}

    </Card>
    </Link>
  );
}
export default Product;
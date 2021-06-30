
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

export default function Product(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { product, onAdd } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


/* 
  const onAdd = () => {
    console.log(`compraste de articulos`)
}
*/
  return (
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
    
  
    
     
     
      <CardActions disableSpacing className={classes.cardAction}>

      <Link to="checkout-page">
        <IconButton aria-label="Add to cart" onClick={() => onAdd(product)}>
          <AddShoppingCartIcon />
        </IconButton>
        </Link>
      </CardActions>


    </Card>
  
  );
}
